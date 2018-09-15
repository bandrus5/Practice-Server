"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringProcessor {
    constructor() { }
    static getInstance() {
        if (StringProcessor._instance == null) {
            StringProcessor._instance = new StringProcessor();
        }
        return StringProcessor._instance;
    }
    ;
    toLowerCase(s) {
        return s.toLowerCase();
    }
    trim(s) {
        return s.trim();
    }
    parseDouble(s) {
        return Number(s);
    }
}
StringProcessor._instance = null;
exports.StringProcessor = StringProcessor;
//# sourceMappingURL=StringProcessor.js.map