var express = require('express');
var router = express.Router();

// process data sent in on request need body-parser module
var bodyParser = require('body-parser');
var path = require ('path'); // work with separators on any OS
var querystring = require('querystring'); // for use in GET Query string of form URI/path?name=value

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencode

// GET with URI /read/CS3520
router.get('http://csweb01.csueastbay.edu/~rd7359/getMyNodeResults.php', function(req, res, next) {
    //expecting data variable called name --retrieve value using body-parser
    var body = JSON.stringify(req.body);  //if wanted entire body as JSON
    var params = JSON.stringify(req.params);//if wanted parameters
    var value_name = req.params.name;  //retrieve the data associated with name
    res.send("hello " + value_name);
})

// process post
router.post('http://whateverserver.com/readNameAndRespond', function(req, res, next) {
    // retrieve value using body-parser
    var value_name = req.body.name;  // retrieve data associated with name
    res.send("hello " + value_name);
});

module.exports = router;
