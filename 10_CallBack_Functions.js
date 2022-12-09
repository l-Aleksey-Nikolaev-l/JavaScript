
function myCallBack1(someNumber) {

    return someNumber + 1;
}

function myCallBack2(someNumber) {

    return someNumber - 2;
}

function myCallBack3(someNumber) {

    return someNumber * 3;
}


function mainFunction(randomNumber, shouldCall, callBack) {
    
    if(shouldCall) {
        return callBack(randomNumber);
    }

    return randomNumber;
}


console.log(mainFunction(20, true, myCallBack3));



// node 10_CallBack_Functions.js // FOR RUN