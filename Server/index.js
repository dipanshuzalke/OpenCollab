const express = require("express");
const connectDB = require('./config/db')

const app = express();

connectDB()
  .then(() => {
    console.log('Database connection successful')
    app.listen(3000, () => {
      console.log('Server is listening on port 3000')
    })
  })
  .catch(error => {
    console.error('Error in connecting Database')
  })

