// This will be our application entry. We'll setup our server here.
require('dotenv').config();
const fs = require('fs');
const https = require('https');
const http = require('http');
const app = require('./config/app'); // The express app we just created

const port = +process.env.PORT || 8000;
app.set('port', port);

if (process.env.NODE_ENV === 'local') {
  const server = http.createServer(app);
  server.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });
} else {
  const httpsOptions = {
    cert: fs.readFileSync("/etc/letsencrypt/live/dashboard.madisonsreport.com/fullchain.pem"),
    key: fs.readFileSync("/etc/letsencrypt/live/dashboard.madisonsreport.com/privkey.pem")
  }
  const server = https.createServer(httpsOptions, app);
  server.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });
}
