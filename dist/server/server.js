"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTPServer_1 = require("./HTTPServer");
const port = 4041;
class Server {
    constructor() {
        HTTPServer_1.default.listen(port, function () {
            console.log('Express server listening on port ' + port);
        });
    }
}
new Server();
//# sourceMappingURL=server.js.map