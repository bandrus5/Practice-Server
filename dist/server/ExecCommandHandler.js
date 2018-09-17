"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CommandType_1 = require("../util/CommandType");
const StringProcessor_1 = require("./StringProcessor");
const Serializer_1 = require("./Serializer");
class ExecCommandHandler {
    constructor() {
        this.serializer = Serializer_1.Serializer.getInstance();
        this.stringProcessor = StringProcessor_1.StringProcessor.getInstance();
    }
    handle(req, res) {
        const data = JSON.parse(req.headers['data']);
        const type = data.type;
        const input = data.data;
        if (type == CommandType_1.CommandType.ParseDouble) {
            this.stringProcessor.parseDouble(input).then(result => {
                let formattedResult = this.serializer.serializeResults(!Number.isNaN(result), result.toString());
                res.status(200).send({
                    result: formattedResult
                });
            });
        }
        else if (type == CommandType_1.CommandType.ToLower) {
            this.stringProcessor.toLowerCase(input).then(result => {
                let formattedResult = this.serializer.serializeResults(true, result);
                res.status(200).send({
                    result: formattedResult
                });
            });
        }
        else if (type == CommandType_1.CommandType.Trim) {
            this.stringProcessor.trim(input).then(result => {
                let formattedResult = this.serializer.serializeResults(true, result);
                res.status(200).send({
                    result: formattedResult
                });
            });
        }
        else {
            res.send(400);
        }
    }
}
exports.ExecCommandHandler = ExecCommandHandler;
//# sourceMappingURL=ExecCommandHandler.js.map