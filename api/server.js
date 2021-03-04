const express = require('express');
const helmet = require('helmet');



const authRouter = require('../api/auth/auth-router');
const usersRouter = require('../users/users-router');

const server = express();
server.use(express.json());
server.use(helmet());


server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'Family Recipes' });
});
module.exports = server
