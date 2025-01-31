const { Router } = require('express')
const { signupController, loginController } = require('../controllers/userController')

const userRouter = Router()

userRouter.post('/signup', signupController)

userRouter.post('/signin', loginController)

module.exports = {
  userRouter: userRouter
}
