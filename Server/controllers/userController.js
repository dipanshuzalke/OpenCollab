const User = require('../Models/user');
const Mentor = require('../Models/mentor');
const Professional = require('../Models/professional');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.signupController = async function (req, res) {
  const { role } = req.params;
  const { name, emailId, password, skills, githubProfile, organization } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    let newUser;

    if (role === 'student') {
      newUser = new User({ name, emailId, password: hashedPassword, skills, githubProfile });
    } else if (role === 'mentor') {
      newUser = new Mentor({ name, emailId, password: hashedPassword });
    } else if (role === 'professional') {
      newUser = new Professional({ name, emailId, password: hashedPassword, organization });
    } else {
      return res.status(400).json({ message: 'Invalid role' });
    }

    await newUser.save();
    const token = await newUser.getJWT();

    res.cookie('token', token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      httpOnly: true,
    });

    res.status(201).json({ message: `${role} registered successfully!`, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
};

module.exports.loginController = async function (req, res) {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = await user.getJWT();

    res.cookie('token', token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      httpOnly: true,
    });

    res.status(200).json({ message: 'Login Successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
};

module.exports.logoutController = async (req, res) => {
  res.cookie('token', '', {
    expires: new Date(0),
    httpOnly: true,
  });

  res.status(200).json({ message: 'Logout Successful' });
};
