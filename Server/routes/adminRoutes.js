const { Router } = require('express');
const { getAllUsers, updateUserRole, deleteUser } = require('../controllers/adminController');
const adminAuth = require('../middleware/adminAuth');

const adminRouter = Router();

// Admin routes
adminRouter.get('/users', adminAuth, getAllUsers);
adminRouter.put('/users/:userId', adminAuth, updateUserRole);
adminRouter.delete('/users/:userId', adminAuth, deleteUser);

module.exports = adminRouter;
