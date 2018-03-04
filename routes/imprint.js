var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('imprint', {title: 'Felix Klauke - Impressum', active: 'imprint'});
});

module.exports = router;
