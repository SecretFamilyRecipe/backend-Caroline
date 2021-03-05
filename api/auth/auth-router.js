const router = require("express").Router();
const Users = require("../../users/users-model.js");
const bcryptjs = require('bcryptjs'); 



router.post('/register', (req, res) => {
    let { credentials } = req.body;
    const rounds = process.env.HASH_ROUNDS || 4;
    const hash = bcryptjs.hashSync(credentials.password, rounds);

    credentials.passworld = hash;
    
    Users.add(credentials).then(saved => {
        res.status(201).json({ data: saved });
    })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    Users.findBy({ email }).then(user => {
        
        if (user && bcryptjs.compareSync(password, user.password))
        {
            res.status(200).json({ message: 'welcome!' });
        
        } else {
        res.status(401).json({ message: 'invalid credentials' });
            }
    })
}); 
        
router.delete('/logout', (req, res) => {
    res.status(204).end();
});

module.exports = router;