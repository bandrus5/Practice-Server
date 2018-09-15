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
        return __awaiter(this, void 0, void 0, function* () {
            return s.toLowerCase();
        });
    }
    trim(s) {
        return __awaiter(this, void 0, void 0, function* () {
            return s.trim();
        });
    }
    parseDouble(s) {
        return __awaiter(this, void 0, void 0, function* () {
            return Number(s);
        });
    }
}
StringProcessor._instance = null;
exports.StringProcessor = StringProcessor;
//# sourceMappingURL=StringProcessor.js.map