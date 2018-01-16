const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var port = process.env.PORT || 5000;
app.listen(port, () => {
console.log('server is up on: ', port);

});

const path = require( 'path' );

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

const router = require('./routes/tasklist.router.js');
app.use('/mytasklist', router);


