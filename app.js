var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var app = express();


var places = [
	{'place': 'seville',
	'next': 'canary'}, 
	{'place': 'canary',
	'next': 'capeverde'},
	{'place': 'capeverde',
	'next': 'straitsofmagellan' },
	{'place': 'straitsofmagellan',
	'next': 'guam'},
	{'place': 'guam',
	'next': 'phillipines'},
	{'place': 'phillipines',
	'next': 'seville'}
];

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
});

// app.get('/places/:id', function(req, res) {
// 	var city = req.params.id.toLowerCase();

// 	var next = _.find(places, function(seville){
// 		console.log(places.place);
// 		return places[0].place===city;
// 	});
// 	console.log(next);
// 	res.render(next);
// });
app.get('/canary', function(req, res) {
	res.render('canary');
});


app.get('/capeverde', function(req, res) {
	res.render('capeverde');
});

app.get('/straitsofmagellan', function(req, res) {
	res.render('straitsofmagellan');
});

app.get('/guam', function(req, res) {
	res.render('guam');
});

app.get('/phillipines', function(req, res) {
	res.render('phillipines');
});

var server = app.listen(9858, function() {
	console.log('Express server listening on port ' + server.address().port);
});
