const express = require('express');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const http = require('http');
const { Server } = require('socket.io');

const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');
const chatRoutes = require('./routes/chatRoutes.js');
const ChatMessage = require('./models/chatMessage.js');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // Vite's default port
  credentials: true
}));

app.use(express.json());
app.use(cookieParser())

app.use('/api/chatmessages', chatRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

// Connect to the database, then start the server and Socket.IO
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
          console.error('Error saving chat message:', err);
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
    console.error('Error connecting to Database:', error);
  });
