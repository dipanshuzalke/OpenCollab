const { Router } = require('express');
const { signupController, loginController, logoutController } = require('../controllers/userController');

const userRouter = Router();

// User routes
userRouter.post('/register/:role', signupController);
userRouter.post('/login', loginController);
userRouter.post('/logout', logoutController);

module.exports = userRouter;
