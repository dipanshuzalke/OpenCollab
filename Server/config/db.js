const mongoose = require('mongoose')

const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://deepzalke123:dOSEOVKXIlL1xYaE@cluster0.brzyi.mongodb.net/OpenCollab'
  )
}

module.exports = connectDB;
