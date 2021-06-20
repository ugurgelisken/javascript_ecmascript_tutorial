var API_1 = fetch("https://reqres.in/api/users/One");
var API_2 = fetch("https://reqres.in/api/users/2");

Promise.allSettled([API_1, API_2]).then(results => {
  results.forEach(result => {
    console.log(result); 
  });
});

// Log:
// {status: "fulfilled", value: Response}
// {status: "fulfilled", value: Response}