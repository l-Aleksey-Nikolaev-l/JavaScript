


    // function myFunction() {
    //     console.log("Hello world, this is my first function.");
    // }
    // myFunction();

///////////////////////////////////////////////////////////////////////

// An Immediate-Invoked Function Expression (IIFE)
// is a function that is executed instantly after it's defined.
// This pattern has been used to alias global variables,
// make variables and functions private and to ensure asynchronous
// code in loops are executed correctly.

    // (function anotherFunction() {
    //     console.log("hello");
    // })();


///////////////////////////////////////////////////////////////////////
//
//     function myFunction(someNumber, someString) {
//         console.log(someNumber);
//         console.log(someString);
//     }
//
//     myFunction(20, "string is string");


////////////////////////////////////////////////////////////////////

    // function myFunction() {
    //     console.log("something");
    // }
    //
    // // Anonymous function is function without name (can be used as an argument)
    // const anotherFunction = function() {
    //     console.log("another thing");
    // }
    //
    // myFunction();
    // anotherFunction();


////////////////////////////////////////////////////////////////////

    const myNumber = 20;

    let myFunction = () => {
        if (myNumber < 15) {
            return "returned the function early";
        }
        return 40;
    }


// node 7_Functions.js // FOR RUN