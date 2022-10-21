const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');
// const httpProxy = require('http-proxy');
// const http = require('http');
var proxy = require('express-http-proxy');

// const hproxy = httpProxy.createProxyServer({});

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'vibrantvelachery_root',
//     password: 'Sai@2019',
//     database: 'vibrantvelachery_vvians_db'
// });

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'strava'
});

connection.connect();

const port = process.env.PORT || 3000;

const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(events(connection));

// app.get('/api/*', function(req, res) {
//   // Prints "Request GET https://httpbin.org/get?answer=42"
//   console.log('Request', req.method, req.url);
//   hproxy.web(req, res, { target: 'https://www.strava.com' });
// });

// app.get('/api*', proxy('http://www.strava.com'));

app.use('/api*', proxy('https://www.strava.com',{
    proxyReqPathResolver: function (req) {
        if(req.method == "POST"){
            console.log(req.method,req.originalUrl);
            return req.originalUrl;
        }else{
            console.log(req.method,req.originalUrl);
            return req.originalUrl;
        }
    }
    }));



app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
