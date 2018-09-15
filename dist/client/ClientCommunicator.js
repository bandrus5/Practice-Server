"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Results_1 = require("../util/Results");
const axios_1 = require("axios");
class ClientCommunicator {
    constructor() { }
    static getInstance() {
        if (ClientCommunicator._instance == null) {
            ClientCommunicator._instance = new ClientCommunicator();
        }
        return ClientCommunicator._instance;
    }
    ;
    send(phrase, requestType) {
        return axios_1.default.get('http://localhost:4041/' + requestType, { headers: { input: phrase } }).then(response => {
            return response.data.result;
        }).catch((error) => { return new Results_1.Results(false, '', 'A server error occured'); });
    }
}
ClientCommunicator._instance = null;
exports.ClientCommunicator = ClientCommunicator;
//# sourceMappingURL=ClientCommunicator.js.map