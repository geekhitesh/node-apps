const add = (a,b) => {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(a <0 || b < 0)
                reject("Number can't be negative");
            resolve(a+b);
        },2000)
    })
}


const doWork = async () => {

    const sum = await add(1,99);
    const sum2 = await add(sum,-1);
    return sum2;
}

doWork().then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})
