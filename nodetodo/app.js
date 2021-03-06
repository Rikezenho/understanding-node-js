var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

var config = require('./config');

// var todoModel = require('./models/todoModel');

var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
 
app.set('view engine', 'ejs');

app.use(cors({ origin: '*' }));

// ===== mongoose
mongoose.connect(config.getDbConnectionString());

// ===== routes
setupController(app);
apiController(app);

app.listen(port);