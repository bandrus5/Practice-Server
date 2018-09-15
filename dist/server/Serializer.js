"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Results_1 = require("../util/Results");
class Serializer {
    constructor() { }
    static getInstance() {
        if (Serializer._instance == null) {
            Serializer._instance = new Serializer();
        }
        return Serializer._instance;
    }
    serializeResults(success, newString) {
        if (success) {
            return new Results_1.Results(false, "None", "The requested operation could not be performed.");
        }
        else {
            return new Results_1.Results(true, newString, "None");
        }
    }
}
Serializer._instance = null;
exports.Serializer = Serializer;
//# sourceMappingURL=Serializer.js.map