
// Basic structure IF:  if(condition) { ...; } else { ...; }

    // if("some string" === "another string") {
    //     console.log("The strings are equal");
    // } else {
    //     console.log("The strings are not equal");
    // }

///////////////////////////////////////////////////////////
//
// const firstNumber = 20;
// const secondNumber = 10;
// const jsExpression = firstNumber > secondNumber;
//
//     // Only using IF statement
//     if(jsExpression) {
//         console.log("This expression is true");
//     }
//
//     // An IF-ELSE statement
//     if(jsExpression) {
//         console.log("This expression is true");
//     } else {
//         console.log("This expression is false");
//     }
//
//     // Adding another "code path" with ELSE IF
//     if(jsExpression) {
//         console.log("The expression is true");
//     } else if(firstNumber > 0) {
//         console.log("The expression is false and the firstNumber is greater than 0");
//     } else {
//         console.log("The expression is false and the firstNumber is 0 or less");
//     }
//
//     // It works same, just formatted differently
//     if(jsExpression) { console.log("Just a different format") };
//
//     // TERNARY operation
//     console.log( jsExpression ? "This expression is true" : "This expression is false" )


///////////////////////////////////////////////////////////
// Basic structure SWITCH: switch(condition) { case X: ...; break; }

const colors = ["orange", "green", "yellow", "purple", "blue"];

const randomIndex = Math.floor(Math.random() * colors.length);

const randomColor = colors[randomIndex];

switch (randomColor) {
    case "orange":
        console.log("The color is orange");
        break;
    case "green":
        console.log("The color is green");
        break;
    case "yellow":
        console.log("The color is yellow");
        break;
    case "purple":
        console.log("The color is purple");
        break;
    case "blue":
        console.log("The color is blue");
        break;
    default:
        console.log("No color found");
}


// node 5_Conditionals.js // FOR RUN