"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HandlerBase_1 = require("./HandlerBase");
class ParseDoubleHandler extends HandlerBase_1.HandlerBase {
    handle(req, res) {
        let input = req.headers['input'];
        let result = this.stringProcessor.parseDouble(input);
        let formattedResult = this.serializer.serializeResults(!Number.isNaN(result), result.toString());
        res.status(200).send({
            result: formattedResult
        });
    }
}
exports.ParseDoubleHandler = ParseDoubleHandler;
//# sourceMappingURL=ParsedoubleHandler.js.map