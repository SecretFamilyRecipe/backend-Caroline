const router = require('express').Router();

const Users = require('./users-model');

router.post('/register', (req, res) => {
    const { user } = req.body;
    Users.registerUser(user)
        .then(newUser => {
        res.status(201).json(newUser)
        })
        .catch(error => {
        res.status(500).json({error:error.message})
    })
})

module.exports = router; 