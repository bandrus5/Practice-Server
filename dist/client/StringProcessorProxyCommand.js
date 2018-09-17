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
const CommandData_1 = require("../util/CommandData");
const CommandType_1 = require("../util/CommandType");
class StringProcessorProxyCommand {
    constructor() {
        this.communicator = ClientCommunicator_1.ClientCommunicator.getInstance();
    }
    static getInstance() {
        if (StringProcessorProxyCommand._instance == null) {
            StringProcessorProxyCommand._instance = new StringProcessorProxyCommand();
        }
        return StringProcessorProxyCommand._instance;
    }
    ;
    toLowerCase(s) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = new CommandData_1.CommandData(CommandType_1.CommandType.ToLower, s);
            let results = yield this.communicator.sendCommand(data);
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
            let data = new CommandData_1.CommandData(CommandType_1.CommandType.Trim, s);
            let results = yield this.communicator.sendCommand(data);
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
            let data = new CommandData_1.CommandData(CommandType_1.CommandType.ParseDouble, s);
            let results = yield this.communicator.sendCommand(data);
            if (results.success) {
                return Number(results.changedString);
            }
            else {
                return results.errorInfo;
            }
        });
    }
}
StringProcessorProxyCommand._instance = null;
exports.StringProcessorProxyCommand = StringProcessorProxyCommand;
//# sourceMappingURL=StringProcessorProxyCommand.js.map