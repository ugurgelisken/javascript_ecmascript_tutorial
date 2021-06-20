const promise_1 = true; 
const promise_2 = Promise.resolve(true);
const promise_3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("3. promise başarılı.");
    }, 10 );
});

Promise.all([promise_1, promise_2, promise_3])
.then( result => { 
    console.log(result);
});
