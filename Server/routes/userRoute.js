const { Router } = require('express')
const { signupController, loginController } = require('../controllers/userController')
const { getAllUsers, updateUserRole, deleteUser } = require('../controllers/adminController');
const adminAuth = require('../middleware/adminAuth');


const userRouter = Router()

// Existing routes
userRouter.post('/signup', signupController)
userRouter.post('/login', loginController)

// Admin routes
userRouter.get('/admin/users', adminAuth, getAllUsers)
userRouter.put('/admin/users/:userId', adminAuth, updateUserRole)
userRouter.delete('/admin/users/:userId', adminAuth, deleteUser)

module.exports = {
  userRouter: userRouter
}
