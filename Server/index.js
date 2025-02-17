const express = require('express')
const session = require('express-session'); // to store user session
const passport = require('passport'); // to authenticate user
const GitHubStrategy = require('passport-github2').Strategy; // to authenticate user
const connectDB = require('./config/db')
const cors = require('cors')
const userModel = require('./Models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { userRouter } = require('./routes/userRoute')

const app = express()

// Configuration with hardcoded values (for development only - not recommended for production)
const GITHUB_CLIENT_ID = '4b1018f34e5bed6d7ed1' // process.env.GITHUB_CLIENT_ID
const GITHUB_CLIENT_SECRET = '1f7e9d23e4e8b85e9f3c3f5e8b4d7c6a9b8c7d6e' // process.env.GITHUB_CLIENT_SECRET
const SESSION_SECRET = 'your-super-secret-session-key-123' // process.env.SESSION_SECRET

// Session middleware
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

// Initialize passport
app.use(passport.initialize())
app.use(passport.session())

// Passport serialization
passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userModel.findById(id)
    done(null, user)
  } catch (err) {
    done(err, null)
  }
})

// GitHub Strategy
passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  async function(accessToken, refreshToken, profile, done) {
    try {
      // Find or create user
      let user = await userModel.findOne({ githubId: profile.id })
      
      if (!user) {
        // Hash the access token before storing it as password
        const hashedToken = await bcrypt.hash(accessToken, 10)
        
        user = await userModel.create({
          name: profile.displayName || profile.username,
          emailId: profile.emails?.[0]?.value || `${profile.username}@github.com`,
          password: hashedToken, // Store hashed token as password
          githubProfile: profile.profileUrl,
          githubId: profile.id,
          profileImage: profile.photos?.[0]?.value || 'https://geographyandyou.com/images/user-profile.png'
        })
      }
      
      return done(null, user)
    } catch (err) {
      console.error('GitHub authentication error:', err)
      return done(err, null)
    }
  }
))

app.use(cors({
  origin: 'http://localhost:5173', // Vite's default port
  credentials: true
}))

app.use(express.json())


// GitHub auth routes
app.get('/auth/github',
  passport.authenticate('github', { 
    scope: ['user:email'],
    failureRedirect: '/login'
  })
)

app.get('/auth/github/callback', 
  passport.authenticate('github', { 
    failureRedirect: '/login',
    failureMessage: true 
  }),
  function(req, res) {
    // Generate JWT token for the authenticated user
    const token = jwt.sign(
      { id: req.user._id },
      SESSION_SECRET,
      { expiresIn: '24h' }
    )
    
    // Successful authentication - redirect with token
    res.redirect(`http://localhost:5173/dashboard?token=${token}`)
  }
)

// Add logout route
app.get('/auth/logout', (req, res) => {
  req.logout(function(err) {
    if (err) {
      return res.status(500).json({ message: 'Error logging out' })
    }
    res.redirect('http://localhost:5173/login')
  })
})

app.use('', userRouter)

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



//To test this:
// Create a new GitHub OAuth app at https://github.com/settings/developers
// Set the Authorization callback URL to http://localhost:3000/auth/github/callback
// Replace the GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET with your actual values
// Start your server and try accessing /auth/github endpoint


