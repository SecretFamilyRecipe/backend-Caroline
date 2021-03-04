const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);
server.use()
server.get('/api', (req, res) => {
    res.json({ message: 'API UP AND RUNNING' });
})

    module.exports = server;