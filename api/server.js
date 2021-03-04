const express = require('express');
const helmet = require('helmet');


const authRouter = require('./auth/auth-router');
const usersRouter = require('../users/users-router');

const server = express();
server.use(express.json());
server.use(helmet());

if (process.env.NODE_ENV === 'development') {
    const cors = require('cors');
    server.use(cors());
    console.log('using cors')
}

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/api', (req, res) => {
    res.status(200).json({ api: 'Family Recipes' });
});
module.exports = server
