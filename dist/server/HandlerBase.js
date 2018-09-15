"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Serializer_1 = require("./Serializer");
const StringProcessor_1 = require("./StringProcessor");
class HandlerBase {
    constructor() {
        this.serializer = Serializer_1.Serializer.getInstance();
        this.stringProcessor = StringProcessor_1.StringProcessor.getInstance();
    }
}
exports.HandlerBase = HandlerBase;
//# sourceMappingURL=HandlerBase.js.map