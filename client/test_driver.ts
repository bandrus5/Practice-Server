import axios from 'axios';
import { StringProcessorProxy } from './StringProcessorProxy';

let proxy = StringProcessorProxy.getInstance();

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
