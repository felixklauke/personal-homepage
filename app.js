let express = require('express');
let app = express();

let server = app.listen(3002, function () {
    console.log('Listening on ' + server.address().port)
});
