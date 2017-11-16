var express = require('express');
var router = express.Router();

// process data sent in on request need body-parser module
var bodyParser = require('body-parser');
var path = require ('path'); // work with separators on any OS
var querystring = require('querystring'); // for use in GET Query string of form URI/path?name=value

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencode

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'CS3250' });
});

// process post to read post data called name
router.post('/readNameAndRespond', function(req, res, next) {
    //expecting data variable called name --retrieve value using body-parser
    var body = JSON.stringify(req.body);  //if wanted entire body as JSON
    var params = JSON.stringify(req.params);//if wanted parameters
    var value_name = req.body.name;  //retrieve the data associated with name
    res.send("hello now " + value_name);
});

module.exports = router;
