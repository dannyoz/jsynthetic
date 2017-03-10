var express = require('express');
const js = express();
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const envPath     = __dirname+'/environments/'+environment+'/';
const routes      = require(__dirname+'/express/routing').routes;
const posts       = require(__dirname+'/express/post-routes');
const staticDirs  = require(__dirname+'/express/routing').staticDirs;
const err404      = require(__dirname+'/express/routing').err404;

js.set('port', (process.env.PORT || 5000));
js.use(bodyParser({limit: '50mb'}));

routes.forEach(function (route){
  js.get(route.path,function(req,res){
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(envPath+'views/index.html');
  });
});

// for (var postRoute in posts) {
//     js.post(postRoute, posts[postRoute]);
// };

staticDirs.forEach(function (dir){
  js.use('/'+dir, express.static(envPath+dir));
});

js.get('/env', function(req, res) {
	res.status(200).send(process.env);
});

js.use(err404);

js.listen(js.get('port'), function() {
  console.log('Jimmy app is running on port', js.get('port'));
});
