const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

const { userRouter } = require('./routes/userRoute')

const app = express()

app.use(cors({
  origin: 'http://localhost:5173', // Vite's default port
  credentials: true
}))

app.use(express.json())
app.use('', userRouter)

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
