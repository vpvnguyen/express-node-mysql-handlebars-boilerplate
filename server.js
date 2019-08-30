const express = require('express');
const exphbs = require('express-handlebars');
const routing = require('./routing/routes.js');
const controllers = require('./controllers/app.controller.js');

// set environment variable port or set 3000 as default
const PORT = process.env.PORT || 3000;

const app = express();

// MIDDLEWARE

// handle url encoded data; parse json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// make public static
app.use(express.static('public'));

// handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// routing and controllers
app.use(routing);
app.use(controllers);

// start server and listen for client requests
app.listen(PORT, function () {
    // log (server-side) when server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
});