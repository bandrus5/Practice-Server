"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClientCommunicator_1 = require("./ClientCommunicator");
class StringProcessorProxy {
    constructor() {
        this.communicator = ClientCommunicator_1.ClientCommunicator.getInstance();
    }
    static getInstance() {
        if (StringProcessorProxy._instance == null) {
            StringProcessorProxy._instance = new StringProcessorProxy();
        }
        return StringProcessorProxy._instance;
    }
    ;
    toLowerCase(s) {
        return __awaiter(this, void 0, void 0, function* () {
            let results = yield this.communicator.send(s, 'tolowercase');
            if (results.success) {
                return results.changedString;
            }
            else {
                return results.errorInfo;
            }
        });
    }
    trim(s) {
        return __awaiter(this, void 0, void 0, function* () {
            let results = yield this.communicator.send(s, 'trim');
            if (results.success) {
                return results.changedString;
            }
            else {
                return results.errorInfo;
            }
        });
    }
    parseDouble(s) {
        return __awaiter(this, void 0, void 0, function* () {
            let results = yield this.communicator.send(s, 'parseDouble');
            if (results.success) {
                return Number(results.changedString);
            }
            else {
                return results.errorInfo;
            }
        });
    }
}
StringProcessorProxy._instance = null;
exports.StringProcessorProxy = StringProcessorProxy;
//# sourceMappingURL=StringProcessorProxy.js.map