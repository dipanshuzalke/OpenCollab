const userModel = require('../Models/user');

module.exports.getAllUsers = async function(req, res) {
    try {
        const users = await userModel.find({}, '-password');
        res.json({ users });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
};

module.exports.updateUserRole = async function(req, res) {
    try {
        const { userId, isAdmin } = req.body;
        // Should check if user exists before updating
        await userModel.findByIdAndUpdate(userId, { isAdmin });
        res.json({ message: 'User role updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user role' });
    }
};

module.exports.deleteUser = async function(req, res) {
    try {
        const { userId } = req.params;
        await userModel.findByIdAndDelete(userId);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user' });
    }
};