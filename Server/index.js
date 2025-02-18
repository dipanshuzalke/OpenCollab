if(process.env.NODE_ENV != "production") {
  require('dotenv').config();
}

const express = require('express');
const session = require('express-session'); 
const passport = require('passport'); 
const GitHubStrategy = require('passport-github2').Strategy; 
const connectDB = require('./config/db');
const cors = require('cors');
const userModel = require('./Models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const MongoStore = require("connect-mongo")
const http = require('http');
const { Server } = require('socket.io');

const ChatMessage = require('./Models/chatMessage');
const { userRouter } = require('./routes/userRoute');

const app = express();
const dbURL = process.env.ATLASDB_URL;

// Configuration with hardcoded values (for dev only)
const GITHUB_CLIENT_ID = '4b1018f34e5bed6d7ed1'; 
const GITHUB_CLIENT_SECRET = '1f7e9d23e4e8b85e9f3c3f5e8b4d7c6a9b8c7d6e'; 
const SESSION_SECRET = 'your-super-secret-session-key-123';

const store = MongoStore.create({
  mongoUrl: dbURL,
  crypto: {
    SESSION_SECRET
  },
  touchAfter: 24 * 3600
})

store.on("error", () => {
  console.log("ERROR IN MONGO SESSION STORE", err);
})

// Session middleware
app.use(session({
  store,
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge : 7 * 24 * 60 * 60 * 1000,
    httpOnly: true
  }
}));



// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Passport serialization
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userModel.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

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

// Routes
app.use('/api/user', userRouter);

// Endpoint to fetch all chat messages
app.get('/api/chatmessages', async (req, res) => {
  try {
    const allMessages = await ChatMessage.find().sort({ postedAt: 1 });
    res.json(allMessages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get('/api/get-username/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ username: user.name });
  } catch (err) {
    console.error('Error fetching username:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Connect to DB, then start server & Socket.IO
connectDB()
  .then(() => {
    console.log('Database connection successful');

    const server = http.createServer(app);
    const io = new Server(server, {
      cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST']
      }
    });

    io.on('connection', (socket) => {
      console.log('A new client connected:', socket.id);

      socket.on('chat message', async (msg) => {
        try {
          const chatDoc = await ChatMessage.create(msg);
          io.emit('chat message', chatDoc);
        } catch (err) {
          console.error('error saving chat message:', err);
        }
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
      });
    });

    server.listen(3000, () => {
      console.log('Server is listening on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error in connecting Database:' + error);
  });