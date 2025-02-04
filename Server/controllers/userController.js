const userModel = require('../Models/user')
// const { users } = require('../config/mockData') till the time database id not accessed
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const JWT_USER_PASSWORD = 'dipanshu@123'

module.exports.signupController = async function (req, res) {
    const { name, emailId, password, skills, profileImage, githubProfile } =
      req.body
  
    try {
      // Hash password before saving
      const hashedPassword = await bcrypt.hash(password, 10)

      await userModel.create({
        name,
        emailId,
        password: hashedPassword,
        skills,
        profileImage,
        githubProfile
      })
    } catch (error) {
      console.log(error)
      res.json({
        message: 'Error in signup'
      })
    }
  
    res.json({
      message: 'signup succeded'
    })
}

module.exports.loginController = async function (req, res) {
  const { emailId, password } = req.body

  // First find user by email only
  const user = await userModel.findOne({ emailId })

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

  res.json({
    token: token,
    message: 'You are signed in',
    isAdmin: user.isAdmin
  })
}

//else part is removed because !user already exist
