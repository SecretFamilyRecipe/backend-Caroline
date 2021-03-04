require('dotenv').config();



const server = require('./api/server.js');
  

const port = process.env.PORT

// server.use(express.static(path.join(__dirname, 'client/dist')))

// server.get('*', (req, res) => {
//   // if you want to serve a SPA using Express you totally can!
//   res.sendFile(path.join(__dirname, 'client/dist', 'index.html'))
// })

server.listen(port, () => {
  console.log('listening on ' + port)
})
