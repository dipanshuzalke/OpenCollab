const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Secret for JWT (move to env variables for production)
const SESSION_SECRET = 'your-super-secret-session-key-123';

router.get('/github', 
  passport.authenticate('github', { 
    scope: ['user:email'],
    failureRedirect: '/login'
  })
);

router.get('/github/callback', 
  passport.authenticate('github', { 
    failureRedirect: '/login',
    failureMessage: true 
  }),
  (req, res) => {
    // Generate JWT token for the authenticated user
    const token = jwt.sign(
      { id: req.user._id },
      SESSION_SECRET,
      { expiresIn: '24h' }
    );
    
    // Redirect to the frontend with the token
    res.redirect(`http://localhost:5173/dashboard?token=${token}`);
  }
);

// Optional: logout route
router.get('/logout', (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('http://localhost:5173/login');
  });
});

module.exports = {
  githubAuthRoutes: router
};
