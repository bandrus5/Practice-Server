"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const ToLowerCaseHandler_1 = require("./ToLowerCaseHandler");
const TrimHandler_1 = require("./TrimHandler");
const ParsedoubleHandler_1 = require("./ParsedoubleHandler");
const ExecCommandHandler_1 = require("./ExecCommandHandler");
class HTTPServer {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.status(200).send({
                message: 'Hello There!'
            });
        });
        router.get('/tolowercase', (req, res) => {
            let handler = new ToLowerCaseHandler_1.ToLowerCaseHandler();
            handler.handle(req, res);
        });
        router.get('/trim', (req, res) => {
            let handler = new TrimHandler_1.TrimHandler();
            handler.handle(req, res);
        });
        router.get('/parsedouble', (req, res) => {
            let handler = new ParsedoubleHandler_1.ParseDoubleHandler();
            handler.handle(req, res);
        });
        router.get('/command', (req, res) => {
            let handler = new ExecCommandHandler_1.ExecCommandHandler();
            handler.handle(req, res);
        });
        this.app.use('/', router);
    }
}
exports.default = new HTTPServer().app;
//# sourceMappingURL=HTTPServer.js.map