const photos = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/photos', {
        method: 'get'
    }).then(function(response) {
        resolve(response.json());
    }).catch(function(e) {
        reject(e);
    });
});

const albums = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/albums', {
        method: 'get'
    }).then(function(response) {
        resolve(response.json());
    }).catch(function(e) {
        reject(e);
    });
});

Promise.all( [photos,albums] ).then(data => { 
    console.log(data);
});
