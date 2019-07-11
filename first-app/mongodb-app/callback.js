const doCallBack = (callback) => {

    setTimeout(() => {

        callback("Called callback");

    },2000);
}

const callbackHandler = (result) => {
    console.log(result);
}

doCallBack(callbackHandler);