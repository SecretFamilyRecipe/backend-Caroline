const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('../users/users-router.js');
const authRouter = require('./auth/auth-router.js');  

const server = express();
server.use(express.json());
server.use(helmet())
server.use(cors())

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.json({ api: 'API UP AND RUNNING' });
}); 

    module.exports = server;