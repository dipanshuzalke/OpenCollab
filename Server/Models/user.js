const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const ObjectId = mongoose.Types.ObjectId
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new Schema(
  {
    userId: ObjectId,
    name: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50
    },
    emailId: {
      type: String,
      lowercase: true,
      required: true,
      // unique: true,
      trim: true,
      validate (value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email address')
        }
      }
    },
    password: {
      type: String,
      required: true
    },
    skills: {
      type: [String]
    },
    profileImage: {
      type: String,
      default: 'https://geographyandyou.com/images/user-profile.png',
      validate (value) {
        if (!validator.isURL(value)) {
          throw new Error('Invalid photo url: ' + value)
        }
      }
    },
    githubProfile: {
      type: String
    },
    // savedProjects : {

    // },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

userSchema.methods.getJWT = async function () {
  const user = this

  const token = await jwt.sign({ _id: user._id, role: this.role }, 'Deep@123', {
    expiresIn: '7d'
  })

  return token
}

userSchema.methods.validatePassword = async function (passwordInputNyUser) {
  const user = this
  const passwordHash = user.password

  const isPasswordValid = await bcrypt.compare(
    passwordInputNyUser,
    passwordHash
  )

  return isPasswordValid
}

module.exports = mongoose.model('User', userSchema)
