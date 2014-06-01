var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.use(express.static('./assets'));

app.locals.title = 'Shultis-Bryan Wedding';

app.get('/favicon.ico', function(res, res) {
  res.set('Content-Type', 'text/plain');
  res.send(404, 'Don\'t be a dumbass.');
});
app.get('/', function(req, res) {
  res.render('index', {page: 'index'});
});
app.get('/:page', function(req, res) {
  res.render(req.params['page'], {page: req.params['page']});
});

app.listen(process.env.PORT || 3000);
