const who = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Ben');
        }, 100);
    });
}

const what = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('kitap yazıyorum.');
        }, 500);
    });
}

const where = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('evde');
        }, 200);
    });
}
/*
async function message() {
    const a = await who();
    const b = await where();
    const c = await what();

    console.log(`${a} ${b} ${c}`);
    // Ben evde kitap yazıyorum.
}


*/

async function message() {
    const [a, b, c] = await Promise.all([who(), where(), what()]);
  
    console.log(`${ a } ${ b } ${ c }`);
  }
  
message();
