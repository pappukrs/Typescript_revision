"use strict";
const greeting = "Hello, TypeScript!";
console.log("greeting:", greeting);
const age = 5334;
console.log("age:", age);
const isDone = true;
console.log("isDone:", isDone);
const nothing = null;
console.log("nothing:", nothing);
const notDefined = undefined;
console.log("notDefined:", notDefined);
const bigNumber = 9007199254740991n;
console.log("bigNumber:", bigNumber);
const uniqueId = Symbol("id");
console.log("uniqueId:", uniqueId);
// Array of numbers
const numbers = [1, 2, 3, 4, 5];
console.log("numbers:", numbers);
// Tuple: Fixed length array with different types
const tuple = ["TypeScript", 2024];
console.log("tuple:", tuple);
// Enum: Named constants
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log("Direction:", Direction.Up);
// Any: Allows any type (use sparingly)
let randomValue = "Hello";
randomValue = 42;
randomValue = true;
console.log("randomValue:", randomValue);
// Void: No return value (used in functions)
function logMessage(message) {
    console.log("logMessage:", message);
}
logMessage("This is a void function");
// Never: Represents values that never occur (e.g., functions that throw errors)
function throwError(message) {
    throw new Error(message);
}
// Object: Non-primitive types
const user = { name: "John", age: 30 };
console.log("user:", user);
