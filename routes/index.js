
var express = require('express');
var router = express.Router();


const{user_add} = require('../controller/usercontroller');


router.post('/add',user_add);

module.exports = router;
