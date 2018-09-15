"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Results {
    constructor(success, changedString, errorInfo) {
        this.success = success;
        this.changedString = changedString;
        this.errorInfo = errorInfo;
    }
    getSuccess() {
        return this.success;
    }
    getChangedString() {
        return this.changedString;
    }
    getErrorInfo() {
        return this.errorInfo;
    }
}
exports.Results = Results;
//# sourceMappingURL=Results.js.map