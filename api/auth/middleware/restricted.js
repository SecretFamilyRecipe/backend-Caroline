const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

  
    if (!token)
    {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err)
            {
                res.status(401).json({ message: 'not permitted' })
            } else
            {
                req.jwt = decodedToken; // 

            }
        })
      
    
        next();
    }
}