 // base url
 const fetch = require("node-fetch");
 var base = 'https://jsonplaceholder.typicode.com';

 // use fetch on the /posts route, then pass the response along
 fetch(base + "/posts").then(function(response) {
     // with the response, convert it to JSON, then pass it along
     response.json().then(function(json) {
         // print that JSON
         console.log(json);
     });
 });