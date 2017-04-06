// 'use strict';

// var Http = require('http');
// var Express = require('express');
// var BodyParser = require('body-parser');
// var Swaggerize = require('swaggerize-express');
// var Path = require('path');

// var App = Express();

// var Server = Http.createServer(App);

// App.use(BodyParser.json());
// App.use(BodyParser.urlencoded({
//     extended: true
// }));

// App.use(Swaggerize({
//     api: Path.resolve('./config/swagger.yaml'),
//     handlers: Path.resolve('./handlers')
// }));

// Server.listen(8000, function () {
//     App.swagger.api.host = this.address().address + ':' + this.address().port;
//     /* eslint-disable no-console */
//     console.log('App running on %s:%d', this.address().address, this.address().port);
//     /* eslint-disable no-console */
// });
'use strict';

 var port = process.env.PORT || 8000; // first change

 var http = require('http');
 var express = require('express'),
    azureMobileApps = require('azure-mobile-apps');
 var bodyParser = require('body-parser');
 var swaggerize = require('swaggerize-express');
 var swaggerUi = require('swaggerize-ui'); // second change
 var path = require('path');

 var app = express(),
    mobile = azureMobileApps();
    // Define the database schema that is exposed
mobile.tables.import('./tables');
// Provide initialization of any tables that are statically defined
mobile.tables.initialize().then(function () {
    // Add the mobile API so it is accessible as a Web API
    app.use(mobile);

    // Start listening on HTTP
    app.listen(process.env.PORT || 3000);
});
//mobile.tables.add('calculationsTable');
//app.use(mobile);

 var server = http.createServer(app);

 app.use(bodyParser.json());

 app.use(swaggerize({
     api: path.resolve('./config/swagger.yaml'), // third change
     handlers: path.resolve('./handlers'),
     docspath: '/swagger' // fourth change
 }));

 // change four
 app.use('/docs', swaggerUi({
   docs: '/swagger'  
 }));
 //app.listen(process.env.PORT || 3000);

 server.listen(port, function () {
     console.log('App running on %s:%d', this.address().address, this.address().port);
 });