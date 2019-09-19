const express = require('express');
const app = express();

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

app.use(express.static('public'));

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello dev.to!\n');
// });

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at ${HOSTNAME} on port ${PORT}.`);
});
