const userModel = require('../Models/user')
// const { users } = require('../config/mockData') till the time database id not accessed
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const JWT_USER_PASSWORD = 'dipanshu@123'
const User = require('../Models/user')
const Mentor = require('../Models/mentor')
const Professional = require('../Models/professional')

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
      await newStudent.save()
    } else if (role === 'mentor') {
      const newMentor = new Mentor({ name, emailId, password: hashedPassword })
      await newMentor.save()
    } else if (role === 'professional') {
      const newProfessional = new Professional({
        name,
        emailId,
        password: hashedPassword,
        organization
      })
      await newProfessional.save()
    } else {
      return res.status(400).json({ message: 'Invalid role' })
    }

    res.status(201).json({ message: `${role} registered successfully!` })
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' })
  }
}

module.exports.loginController = async function (req, res) {
  const { emailId, password } = req.body

  const user = await userModel.findOne({
    emailId: emailId
  })

  if (!user) {
    return res.status(403).json({
      message: 'User does not exist in our db'
    })
  }

  // Compare password with hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    return res.status(403).json({
      message: 'Invalid credentials'
    })
  }

  const token = jwt.sign(
    {
      id: user._id
    },
    JWT_USER_PASSWORD
  )

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: user._id
      },
      JWT_USER_PASSWORD
    )

    res.json({
      token: token,
      message: 'You are signed in',
      isAdmin: user.isAdmin
    })
  } else {
    res.status(403).json({
      message: 'Incorrect credentials'
    })
  }
}

//else part is removed because !user already exist
