
var express = require('express');
var router = express.Router();

const{add_user,show_user} = require('../controller/usercontroller');

router.post('/adduser',add_user);
router.get('/getuser',show_user);

module.exports = router;
