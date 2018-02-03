var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
