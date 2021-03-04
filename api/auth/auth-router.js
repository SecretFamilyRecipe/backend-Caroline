const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken"); 

const router = require("express").Router();
const config = require("./config");

const Users = require('../../users/users-model');
const { isValid } = require('../../users/users-helper');

router.post("/register", (req, res) => {
    const credentials = req.body;

    if (isValid(credentials)) {
        const rounds = process.env.BCRYPT_ROUNDS || 8;

        // hash the password
        const hash = bcryptjs.hashSync(credentials.password, rounds);

        credentials.password = hash;

        // save the user to the database
        Users.add(credentials)
            .then(user => {
                res.status(201).json({ data: user });
            })
            .catch(error => {
                console.log("ERROR:", error)
                res.status(500).json({ message: error.message });
            });
    } else {
        res.status(400).json({
            message: "please provide username and password",
        });
    }
});

router.post("/login", (req, res) => {
    const { user_username, user_password } = req.body;

    if (isValid(req.body)) {
        Users.findBy({ user_username })
            .then(([user]) => {
                // compare the password stored in the database
                if (user && bcryptjs.compareSync(user_password, user.user_password)) {
                    const token = getJwt(user);

                    res.status(200).json({ message: "Family Recipes api", token });
                } else {
                    res.status(401).json({ message: "Invalid credentials" });
                }
            })
            .catch(error => {
                res.status(500).json({ message: error.message });
            });
    } else {
        res.status(400).json({
            message: "please provide username and password",
        });
    }
});

function getJwt(user) {
    const payload = {
        subject: user.user_id,
        username: user.user_username,
        role:user.user_role
    };

    const jwtOptions = {
        expiresIn: "8h",
    };

    return jwt.sign(payload, config.jwtSecret, jwtOptions);
}

module.exports = router;