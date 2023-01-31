
const myString = "My cat jumped on the bad and lie. I my cat is a good Cat.";


// replaceAll method

// const myString_1 = myString.replaceAll("cat", "dog");
//or
const correctString = myString.replaceAll(/[Cc]{1}at/g, "dog");

console.log(correctString);


//<></><></><></><></><></><></><></><></><></><></><></>


// toUpperCase Method

const myString_2 = myString.toUpperCase();

console.log(myString_2);


//<></><></><></><></><></><></><></><></><></><></><></>


// substring Method

let myString_3;

myString_3 = myString.substring(3, 6);
//or
// myString_3 = myString[3].toUpperCase() + myString.substring(4, 6); // combine methods

console.log(myString_3);


//<></><></><></><></><></><></><></><></><></><></><></>


// trim Method


const externalData = [
    {
        title: " How to code?    ",
        author: "   Aleksey "
    },
    {
        title: "  What is MasterCam?",
        author: "Aleksey    "
    },
    {
        title: "   How do HSM in MasterCam ",
        author: "   Aleksey        "
    }
];

for (let i = 0; i < externalData.length; i++) {
    const currentTitle = externalData[i].title;
    const currentAuthor = externalData[i].author;

    externalData[i].title = currentTitle.trim();
    externalData[i].author = currentAuthor.trim();
}

console.log(externalData);


//<></><></><></><></><></><></><></><></><></><></><></>


// match Method

const regex = /[a-z]+/;

const myString_4 = "LoremipsumdolorsitameTconsecteturadipisicingelitNecessitatibusoptio";

//let result = regex.exec(myString_4);
// or
let result = myString_4.match(regex); // it is absolute same expression

console.log(result);

// node 15_String_Methods.js




