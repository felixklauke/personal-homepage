var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('privacy', {title: 'Felix Klauke - Datenschutz', active: 'privacy'});
});

module.exports = router;
