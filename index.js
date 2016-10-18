#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var fs      = require('fs');

var jimmySynthetic = function() {

    var js = this;

    js.setupVariables = function() {

        js.ipaddress   = process.env.OPENSHIFT_NODEJS_IP;
        js.port        = process.env.OPENSHIFT_NODEJS_PORT || 4000,
        js.environment = (process.env.OPENSHIFT_CLOUD_DOMAIN) ? 'production' : 'development';

        if (typeof js.ipaddress === "undefined") {
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            js.ipaddress = "127.0.0.1";
        };
    };

    js.initializeServer = function() {

        js.app = express.createServer();
        js.app.use(express.bodyParser({limit: '50mb'}));

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

        js.app.use(err404);

    };

    js.initialize = function() {
        js.setupVariables();
        js.initializeServer();
    };

    js.start = function() {
        //  Start the app on the specific interface (and port).
        js.app.listen(js.port, js.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), js.ipaddress, js.port);
        });
    };

};

var jsapp = new jimmySynthetic();
jsapp.initialize();
jsapp.start();
