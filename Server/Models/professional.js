const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfessionalSchema = new Schema(
  {
    name: { type: String, required: true },
    emailId: { type: String, required: true, unique: true },
    password: { type: String, required: true }, 
    organization: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Professional', ProfessionalSchema)
