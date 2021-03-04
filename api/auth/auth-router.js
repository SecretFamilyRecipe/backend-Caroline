const router = require("express").Router();
const Users = require("../users/users-model.js");
const restricted = require("./restricted.js"); 
const jwt = require('jsonwebtoken');


router.get("/users", restricted, (req, res) => {
    Users.getAll()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(401).json({ message: err.error })
    })
   
});

router.post("/login", async (req, res) => {
    const {user_username, user_password } = req.body;

    try {
       
        const userRegister = await Users.findBy({ user_username });

        const token = makeJwt(userRegister);

        res.status(200).json({ userRegister, token })
        
    } catch (err) {
        res.status(500).json(err.message)
    }
});

function makeJwt(user) {
    const payload = {
        subject: user.user_id,
        username: user.user_username,
        role: user.user_role
    };

    const secret = process.env.JWT_SECRET 

    const options = {
        expiresIn: "1h"
    }

    return jwt.sign(payload, secret, options)
}

module.exports = router;