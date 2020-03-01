fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        var todo = data
        alert(todo[10].title)
        console.log(data) // Prints result from `response.json()` in getRequest
    })
    .catch(error => console.error(error))