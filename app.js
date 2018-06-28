let express = require('express');
let app = express();

/**
 * Set templating engine to twig.
 */
app.set('view engine', 'twig');

let server = app.listen(3002, function () {
    console.log('Listening on ' + server.address().port)
});
