import app from "./HTTPServer";
const port = 4041;

class Server {
  constructor() {
    app.listen(port, function() {
      console.log('Express server listening on port ' + port);
    });
  }
}

new Server();
