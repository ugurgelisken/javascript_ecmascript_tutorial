fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => console.log(data));


fetch('https://reqres.in/api/users')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });