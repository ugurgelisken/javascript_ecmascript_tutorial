const promise_1 = new Promise((resolve, reject) => {
    let number = Math.random();
    return setTimeout(()=>{
        resolve("Promise 1: " + number)
    }, Math.round(Math.random()*100));
});

const promise_2 = new Promise((resolve, reject) => {
    let number = Math.random();
    return setTimeout(()=>{
        resolve("Promise 2: " + number)
    }, Math.round(Math.random()*100));
});


Promise.race( [promise_1,promise_2] ).then( result => { 
    console.log(result);
});


