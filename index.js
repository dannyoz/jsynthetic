var express = require('express');
var js = express();

var environment = process.env.NODE_ENV || 'development';
var envPath = __dirname+'/environments/'+environment+'/';

var routing = {
	routes : [
        '/',
        '/art',
        '/music',
        '/about'
    ],
	staticDirs : [
        'css', 
        'img', 
        'js',
        'icons'
    ],
    err404 : function(req, res, next){

        var environment  = process.env.NODE_ENV || 'development',
            envPath      = './environments/'+environment+'/';

        res.status(404);

        if (req.accepts('html')) {
            return res.sendfile(envPath+'views/404.html');
        }

        if (req.accepts('json')) {
            return res.send({ error: 'Not found' });
        }

        res.type('txt').send('Not found');
    }
};

js.set('port', (process.env.PORT || 5000));

routing.routes.forEach(function (path){
    js.app.get(path,function(req,res){
        res.setHeader('Content-Type', 'text/html');
        res.sendfile(envPath+'views/index.html');
    });
});

js.get('/env', function(req, res) {
	res.status(200).send(process.env);
});

js.listen(js.get('port'), function() {
  console.log('Node app is running on port', js.get('port'));
});




