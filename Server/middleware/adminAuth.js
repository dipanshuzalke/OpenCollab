const userModel = require('../Models/user');
const jwt = require('jsonwebtoken');
const JWT_USER_PASSWORD = 'dipanshu@123';

const adminAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Authentication required' });
        }

        const decoded = jwt.verify(token, JWT_USER_PASSWORD);
        const user = await userModel.findById(decoded.id);

        if (!user || !user.isAdmin) {
            return res.status(403).json({ message: 'Admin access required' });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = adminAuth;