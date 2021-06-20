
const factorial_module = './modules/factorial.js';

import(factorial_module)
    .then((module) => {

        console.log("Modül yüklendi...");

        module.init();

        console.log(module.factorialExample);

        console.log("10! çözümü: ", module.calculateFactorial(10));

    }).catch(error => {
        console.log("Hata: ", error);
    });