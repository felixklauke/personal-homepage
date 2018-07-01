let sassMiddleware = require('node-sass-middleware');
let path = require('path');
let express = require('express');
let app = express();

/**
 * Set templating engine to twig.
 */
app.set('view engine', 'twig');

/**
 * Configure SASS middleware.
 */
app.use(sassMiddleware({
    src: path.join(__dirname, 'assets'),
    dest: path.join(__dirname, 'public/build'),
    outputStyle: 'compressed',
    prefix: '/vendor',
}));

/**
 * Routing configuration
 */
const dashboardController = require('./routes/dashboardController');
app.use('/', dashboardController);

/**
 * Expose directories.
 */
app.use('/img', express.static(path.join(__dirname, 'public/img')));
app.use('/video', express.static(path.join(__dirname, 'public/video')));
app.use('/vendor', express.static(path.join(__dirname, 'public/build')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/mdbootstrap/js')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/mdbootstrap/css')));
app.use('/font', express.static(path.join(__dirname, 'node_modules/mdbootstrap/font')));

let server = app.listen(3002, function () {
    console.log('Listening on ' + server.address().port)
});
