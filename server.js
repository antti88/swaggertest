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
 var express = require('express');
 var bodyParser = require('body-parser');
 var swaggerize = require('swaggerize-express');
 var swaggerUi = require('swaggerize-ui'); // second change
 var path = require('path'),
    app = require('express')(),
    mobileApps = require('azure-mobile-apps'),
    configuration = require('azure-mobile-apps/src/configuration'),
    mobileApp,

    config = {
        skipVersionCheck: true,
        pageSize: 1000,
        auth: { secret: 'secret' }
    };

mobileApp = mobileApps(config);

// tables
mobileApp.tables.add('calculations',{ columns: { postId: 'string', commentText: 'string', name: 'string', test: 'number' } });
mobileApp.tables.import('tables');

app.use(mobileApp);

// custom APIs
//app.get('/api/jwtTokenGenerator', require('./api/jwtTokenGenerator')(mobileApp.configuration));
//app.get('/api/runtimeInfo', require('./api/runtimeInfo'));
//require('./api/applicationPermission').register(app);
//require('./api/movieFinder').register(app);
//require('./api/push').register(app);
app.use(bodyParser.json());

 app.use(swaggerize({
     api: path.resolve('./config/swagger.yaml'), // third change
     handlers: path.resolve('./handlers'),
     docspath: '/swagger' // fourth change
 }));
 var server = http.createServer(app);

 // change four
 app.use('/docs', swaggerUi({
   docs: '/swagger'  
 }));
mobileApp.tables.initialize().then(function () {
    server.listen(port, function () {
     console.log('App running on %s:%d', this.address().address, this.address().port);
 });
});
 

//app.use(mobileApp);
// app.listen(process.env.PORT || 3000);
//  var server = http.createServer(app);

//  app.use(bodyParser.json());

//  app.use(swaggerize({
//      api: path.resolve('./config/swagger.yaml'), // third change
//      handlers: path.resolve('./handlers'),
//      docspath: '/swagger' // fourth change
//  }));

//  // change four
//  app.use('/docs', swaggerUi({
//    docs: '/swagger'  
//  }));
//  //app.listen(process.env.PORT || 3000);

//  server.listen(port, function () {
//      console.log('App running on %s:%d', this.address().address, this.address().port);
//  });