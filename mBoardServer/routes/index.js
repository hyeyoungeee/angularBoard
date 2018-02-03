var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('./config/database');
var connection = mysql.createConnection(dbconfig);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/getArticleList', function(req, res){
    connection.query('select * from article', function(err, rows){
      if(err) throw err;
      console.log('The solutuion is : ' , rows);

      //res.send(rows);
	  res.json(rows);
    });
});

module.exports = router;