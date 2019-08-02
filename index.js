var express=require("express");
var bodyParser=require('body-parser');
var app = express();

var Customer=require('./Api/customer');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/* route to handle login and registration */
app.use('/api',Customer);

app.listen(5000);