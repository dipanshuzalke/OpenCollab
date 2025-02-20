const User = require('../Models/user')
const Mentor = require('../Models/mentor')
const bcrypt = require('bcrypt')
// const JWT_USER_PASSWORD = 'dipanshu@123'
const Professional = require('../Models/professional.js')

module.exports.signupController = async function (req, res) {
  const { role } = req.params
  const { name, emailId, password, skills, githubProfile, organization } =
    req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    if (role === 'student') {
      const newStudent = new User({
        name,
        emailId,
        password: hashedPassword,
        skills,
        githubProfile
      })
      const savedUser = await newStudent.save()
      const token = await savedUser.getJWT()

      res.cookie('token', token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
        httpOnly: true
      })
    } else if (role === 'mentor') {
      const newMentor = new Mentor({ name, emailId, password: hashedPassword })
      await newMentor.save()
      const token = await newMentor.getJWT()

      res.cookie('token', token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
        httpOnly: true
      })
    } else if (role === 'professional') {
      const newProfessional = new Professional({
        name,
        emailId,
        password: hashedPassword,
        organization
      })
      await newProfessional.save()
      const token = await newProfessional.getJWT()

      res.cookie('token', token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
        httpOnly: true
      })
    } else {
      return res.status(400).json({ message: 'Invalid role' })
    }

    res.status(201).json({ message: `${role} registered successfully!` })
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' })
  }
}

module.exports.loginController = async function (req, res) {
  try {
    const { emailId, password } = req.body

    const user = await User.findOne({
      emailId: emailId
    })

    if (!user) {
      throw new Error('Invalid credentials')
    }

    const isPasswordValid = await user.validatePassword(password)

    if (isPasswordValid) {
      //Create jwt token
      const token = await user.getJWT()

      //Add the token to the cookies and send the response back to the user
      res.cookie('token', token, {
        expiresIn: '7d'
      }) // expire in 8 hour
      res.send('Login Successful')
    } else {
      throw new Error('Invalid credentials')
    }
  } catch (error) {
    res.status(400).send('ERROR : ' + err.message)
  }
}

module.exports.logoutController = async (req, res) => {
  res.cookie('token', null, {
    expires: new Date(Date.now())
  })
}

//else part is removed because !user already exist
