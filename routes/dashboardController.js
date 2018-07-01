let express = require('express');
let router = express.Router();

router.get('/', function (request, response) {
    response.render('index.html.twig', {'title': 'Felix Klauke'})
});

module.exports = router;