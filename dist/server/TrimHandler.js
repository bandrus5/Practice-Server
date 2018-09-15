"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HandlerBase_1 = require("./HandlerBase");
class TrimHandler extends HandlerBase_1.HandlerBase {
    handle(req, res) {
        let input = req.headers['input'];
        let result = this.stringProcessor.trim(input);
        let formattedResult = this.serializer.serializeResults(true, result);
        res.status(200).send({
            result: formattedResult
        });
    }
}
exports.TrimHandler = TrimHandler;
//# sourceMappingURL=TrimHandler.js.map