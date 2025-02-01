const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors');

const { userRouter } = require('./routes/userRoute')

const app = express()

app.use(express.json())
app.use(cors());

app.use('/api/user', userRouter)

connectDB()
  .then(() => {
    console.log('Database connection successful')
    app.listen(3000, () => {
      console.log('Server is listening on port 3000')
    })
  })
  .catch(error => {
    console.error('Error in connecting Database:' + error)
  })



