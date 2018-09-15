"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StringProcessorProxy_1 = require("./StringProcessorProxy");
let proxy = StringProcessorProxy_1.StringProcessorProxy.getInstance();
proxy.trim("       Hello there!     ").then(result => {
    console.log(result);
});
proxy.toLowerCase("GENERAL KENOBI").then(result => {
    console.log(result);
});
proxy.parseDouble('You are a bold one').then(result => {
    console.log(result);
});
proxy.parseDouble('66.0').then(result => {
    console.log(result);
});
//# sourceMappingURL=test_driver.js.map