var restify = require('restify')
    , fs = require('fs')


var controllers = {}
    , controllers_path = process.cwd() + '/app/controllers'
fs.readdirSync(controllers_path).forEach(function (file) {
    if (file.indexOf('.js') != -1) {
        controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
    }
})

var server = restify.createServer();

server
    .use(restify.fullResponse())
    .use(restify.bodyParser());


server.get("/profile", controllers.profile.viewProfile);
server.get("/history", controllers.history.viewHistory);
server.get("/objective", controllers.objective.viewObjective);
server.get("/skills", controllers.skills.viewSkills);

var port = process.env.PORT || 3000;
server.listen(port, function (err) {
    if (err)
        console.error(err)
    else
        console.log('App is ready at : ' + port)
})

if (process.env.environment == 'production') {

  process.on('uncaughtException', function (err) {
      console.error(JSON.parse(JSON.stringify(err, ['stack', 'message', 'inner'], 2)))
  })

}
