new Promise( (resolve, reject) => { 
    console.log("Zaman: ", new Date().toLocaleTimeString());
    setTimeout(() => { 
        resolve(1); 
    }, 1000);
})
.then( result => { 
    console.log('Sıra: ', result); 
    return result*2; 
})
.then(result => { 
    console.log('Sıra: ', result); 
    return result*2; 
})
.then(result => { 
    console.log('Sonuç: ', result);
    console.log("Zaman: ", new Date().toLocaleTimeString());
})
.catch(error => { 
    console.log("Hata: ", error);
});
