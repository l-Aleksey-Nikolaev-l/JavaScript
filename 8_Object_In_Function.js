
function myFunction() {
    return 20;
}

const myObj = {
    prop1: 50,
    prop2: myFunction
}

const name = "Aleksey";
const newName = name.replace("ks", "x");

console.log(
    myObj.prop1,
    myObj.prop2(),
    newName
);

// node 8_Object_In_Function // FOR RUN