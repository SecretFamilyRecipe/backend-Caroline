const router = require('express').Router();

const Users = require('./users-model.js');

const restricted = require('../api/middleware/restricted');

router.get('/', restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json({ users, jwt: req.jwt });
        })
        .catch(err => res.send(err));
});

module.exports = router; 