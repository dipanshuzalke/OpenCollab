const userModel = require('../Models/user')
// const { users } = require('../config/mockData') till the time database id not accessed
const jwt = require('jsonwebtoken')
const JWT_USER_PASSWORD = 'dipanshu@123'

module.exports.signupController = async function (req, res) {
    const { name, emailId, password, skills, profileImage, githubProfile } =
      req.body
  
    try {
      await userModel.create({
        name,
        emailId,
        password,
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

  const user = await userModel.findOne({
    emailId: emailId,
    password: password
  })

  if (!user) {
    return res.status(403).json({
      message: 'User does not exist in our db'
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
