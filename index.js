var express = require('express');
var app = express();
var port     = process.env.PORT || 4000;

// routes ===============================
require('./app/routes.js')(app);

//-----------SETTING UP SERVER-----------
app.listen(port);
console.log("App listening on port " + port);