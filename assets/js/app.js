const axios = require('axios').default;

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

//   https://jsonplaceholder.typicode.com/


var sampleJson = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  };

var myJSON = JSON.stringify(sampleJson);
document.getElementById('demo').innerHTML = myJSON;