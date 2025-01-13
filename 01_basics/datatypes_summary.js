// Primitive
// 7 types : string, number,boolean,null,undefined,symbol,BigInt

const bigNumber = 345239578238979230n
console.log(typeof bigNumber);

let id = Symbol('123')
let anotherId = Symbol('123')
console.log(id === anotherId);

const heros = ["shaktiman", "naaagraj"];
let myObj = {
    name: "poshit",
    age:21
}
// null => object
// undefined => undefined
// reference type(Non Primitve)
// function => function object
//array,objects,functions