const https = require('https')
const fs = require('fs')

const options = {
  key: fs.readFileSync('./privatekey.pem'),
  cert: fs.readFileSync('./certification.pem')
}

https.createServer(options, (req, res) => {
  res.writeHead(200)
  res.end('hello world\n')
}).listen(8000)
