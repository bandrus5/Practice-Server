import axios from 'axios';
import { StringProcessorProxy } from './StringProcessorProxy';
import { StringProcessorProxyCommand } from './StringProcessorProxyCommand';

let proxy = StringProcessorProxy.getInstance();
let commandProxy = StringProcessorProxyCommand.getInstance();

// command implementation
commandProxy.parseDouble("one").then(result => {
  console.log("Testing parsedouble in command implementation with 'one'");
  console.log("Result: " + result);
  console.log();
});
commandProxy.parseDouble("3.8").then(result => {
  console.log("Testing parsedouble in command implementation with '3.8'");
  console.log("Result: " + result);
  console.log();
});
commandProxy.toLowerCase("YoU CAn'T dO tHAt").then(result => {
  console.log("Testing tolowercase in command implementation with 'YoU CAn'T dO tHAt'");
  console.log("Result: " + result);
  console.log();
});
commandProxy.trim("      space     \n").then(result => {
  console.log("Testing trim in command implementation with '      space     '");
  console.log("Result: " + result);
  console.log();
});


// Non-command implementation
proxy.trim("       Hello there!     ").then(result => {
  console.log("Testing trim in non-command implementation with '       Hello there!     '");
  console.log("Result: " + result);
  console.log();
});

proxy.toLowerCase("GENERAL KENOBI").then(result => {
  console.log("Testing tolowercase in non-command implementation with 'GENERAL KENOBI'");
  console.log("Result: " + result);
  console.log();
});

proxy.parseDouble('You are a bold one').then(result => {
  console.log("Testing parsedouble in non-command implementation with 'You are a bold one'");
  console.log("Result: " + result);
  console.log();
});

proxy.parseDouble('66.0').then(result => {
  console.log("Testing parsedouble in non-command implementation with '66.0'")
  console.log("Result: " + result);
  console.log();
});
