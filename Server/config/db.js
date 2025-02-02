const mongoose = require('mongoose')

const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://deepzalke123:dOSEOVKXIlL1xYaE@cluster0.brzyi.mongodb.net/OpenCollab'
  )
}

mongoose.set('debug',true);
module.exports = connectDB;
