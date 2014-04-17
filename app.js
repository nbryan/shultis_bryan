var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.use(express.static('./assets'));

app.locals.title = 'Shultis-Bryan Wedding';

app.get('/', function(req, res) {
  res.render('index');
});
app.get('/:page', function(req, res) {
  res.render(req.params['page']);
});

app.listen(process.env.PORT || 3000);
