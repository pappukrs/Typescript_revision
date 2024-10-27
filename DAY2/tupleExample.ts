
let person:[string,number,boolean]=["Alka",413,true];

console.log(person[0]);

console.log(person[1]);

console.log(person[2]);

person.forEach((e)=>{
   console.log(e)
})

const arr = person.map((e)=>{
  if(typeof(e)=="number"){
   return  e*e
  }
  return e;
})as [string, number, boolean];

console.log("arr",arr);

let man : [string,number];
man = ["pappu",54]; 
console.log("man",man)

const product: [string, number] = ["Laptop", 1500];
console.log("Product:", product[0]); // Output: Laptop
console.log("Price:", product[1]);   // Output: 1500



const user: [string, boolean] = ["John Doe", true];
console.log("Username:", user[0]); // Output: John Doe
console.log("Is Active:", user[1]); // Output: true


let car: [string, number] = ["Tesla", 2020];
car[1] = 2021; // ✅ Allowed
// car[0] = 123; // ❌ Error: Type 'number' is not assignable to type 'string'



const address: [string, number?, string?] = ["123 Main St"];
console.log("Address:", address); // Output: ["123 Main St"]

const point: readonly [number, number] = [10, 20];
// point[0] = 15; // ❌ Error: Cannot assign to '0' because it is a read-only property
console.log("Point:", point);


type User = [string, number, boolean];
const user1: User = ["Alice", 28, true];
const user2: User = ["Bob", 34, false];
console.log("User1:", user1);
console.log("User2:", user2);


const book: [string, number] = ["TypeScript Guide", 399];
const [title, price] = book;
console.log("Title:", title); // Output: TypeScript Guide
console.log("Price:", price); // Output: 399

let colors: [string, string] = ["red", "blue"];
colors.push("green"); // ✅ Allowed
console.log("Colors:", colors); // Output: ["red", "blue", "green"]
// colors.push(42); // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'

const rgb: [number, number, number] = [255, 0, 0];
const rgba: [number, number, number, number] = [...rgb, 0.5];
console.log("RGBA:", rgba); // Output: [255, 0, 0, 0.5]


type StringTuple = [string, ...string[]];
const greetings: StringTuple = ["Hello", "Hi", "Hey"];
console.log("Greetings:", greetings); // Output: ["Hello", "Hi", "Hey"]



type Position = [x: number, y: number];
const points: Position = [10, 20];
console.log("Point:", points); // Output: [10, 20]




function getUser(): [string, number] {
    return ["Alice", 25];
}

const [names, age] = getUser();
console.log("Name:", names); // Output: Alice
console.log("Age:", age);   // Output: 25



type ComplexTuple = [string, number, [boolean, string], { id: number }];
const complex: ComplexTuple = ["test", 42, [true, "active"], { id: 1 }];
console.log("Complex Tuple:", complex);

