var express = require('express');
var js = express();

var jimmySynthetic = function() {

    var js = this;

    js.setupVariables = function() {

        js.port        = process.env.PORT || 5000,
        js.environment = process.env.NODE_ENV || 'development';
    };

    js.initializeServer = function() {

        js.app = express();

        var routes     = require('./express/routing').routes;
        var staticDirs = require('./express/routing').staticDirs;
        var err404     = require('./express/routing').err404;
        var postRoutes = require('./express/post-routes');
        var getRoutes  = require('./express/get-routes');
        var envPath    = __dirname+'/environments/'+js.environment+'/';

        routes.forEach(function (path){
            js.app.get(path,function(req,res){
                res.setHeader('Content-Type', 'text/html');
                res.sendfile(envPath+'views/index.html');
            });
        });

        staticDirs.forEach(function (dir){
            js.app.use('/'+dir, express.static(envPath+dir));
        });

        for (var route in postRoutes) {
            js.app.post(route, postRoutes[route]);
        };

        for (var route in getRoutes) {
            js.app.get(route, getRoutes[route]);
        };

        // for deberging
        js.app.get('/env', function(req, res) {
					res.status(200).send(process.env);
				});

        js.app.use(err404);

    };

    js.initialize = function() {
        js.setupVariables();
        js.initializeServer();
    };

    js.start = function() {
        js.app.listen(js.port, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now()), js.port);
        });
    };

};

var jsapp = new jimmySynthetic();
jsapp.initialize();
jsapp.start();


