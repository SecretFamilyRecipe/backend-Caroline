const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const authRouter = require('../api/auth/auth-router');
const usersRouter = require('../users/users-model');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
module.exports = server
