"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HandlerBase_1 = require("./HandlerBase");
class ToLowerCaseHandler extends HandlerBase_1.HandlerBase {
    handle(req, res) {
        let input = req.headers['input'];
        this.stringProcessor.toLowerCase(input).then(result => {
            let formattedResult = this.serializer.serializeResults(true, result);
            res.status(200).send({
                result: formattedResult
            });
        });
    }
}
exports.ToLowerCaseHandler = ToLowerCaseHandler;
//# sourceMappingURL=ToLowerCaseHandler.js.map