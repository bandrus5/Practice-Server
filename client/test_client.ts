import axios from 'axios';

// axios.get('http://localhost:4041/', { headers: { } }).then( response => {
//   console.log(response.data.message);
// }).catch((error) => {console.log(error)});


axios.get('http://localhost:4041/trim', { headers: { input: '    Hello there!     ' } }).then( response => {
  console.log(response.data.result);
}).catch((error) => {console.log(error)});

axios.get('http://localhost:4041/tolowercase', { headers: { input: 'GENERAL KENOBI' } }).then( response => {
  console.log(response.data.result);
}).catch((error) => {console.log(error)});

axios.get('http://localhost:4041/parsedouble', { headers: { input: '6.6' } }).then( response => {
  console.log(response.data.result);
}).catch((error) => {console.log(error)});

axios.get('http://localhost:4041/parsedouble', { headers: { input: 'You are a bold one' } }).then( response => {
  console.log(response.data.result);
}).catch((error) => {console.log(error)});
