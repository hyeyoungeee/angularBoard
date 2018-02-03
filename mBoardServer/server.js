var express = require('express');
var mysql = require('mysql');
var dbconfig = require('./config/database');
var connection = mysql.createConnection(dbconfig);

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
    res.send('Root');
});

// connection.connect();

app.get('/getArticleList', function(req, res){
    connection.query('select * from article', function(err, rows){
      if(err) throw err;
      console.log('The solutuion is : ' , rows);

      //res.send(rows);
	  res.json(rows);
    });
});

app.listen(app.get('port'), function(){
    console.log('Express server listening on port' + app.get('port'));
})

// connection.end();