// ** Dependencies **
var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override')


// ** DB connect
mongoose.connect('mongodb://localhost/player_api');

// ** App configurations **
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// ** API Routes **
app.use('/api', require('./routes'));

app.get('/', function(req, res){
    res.send('Working');
});

app.listen(3000, function (){
    console.log("Listening on 3000");
});
