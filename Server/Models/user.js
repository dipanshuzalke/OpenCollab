const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator")
// const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50
    },
    emailId : {
        type: String,
        lowercase: true,
        required: true,
        // unique: true,
        trim: true,
        validate(value) {
          if(!validator.isEmail(value)) {
            throw new Error("Invalid email address")
          }
        }
    },
    password : {
        type: String,
        required: true
    },
    skills : {
        type: [String]
    },
    profileImage: {
        type: String,
        default: 'https://geographyandyou.com/images/user-profile.png',
        validate(value) {
          if(!validator.isURL(value)) {
            throw new Error("Invalid photo url: " + value)
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
},{
    timestamps: true
  })

const userModel = mongoose.model('User', userSchema)
module.exports = userModel;
