const doPromise = new Promise((resolve,reject) => {

    setTimeout(()=> {

        resolve("Promise Accomplised");

    },2000);

});


doPromise.then((result)=> {
    console.log(result);
});