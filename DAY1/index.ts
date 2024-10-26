const greeting: string = "Hello, TypeScript!";
console.log("greeting:", greeting);

const age: number = 5334;
console.log("age:", age);

const isDone: boolean = true;
console.log("isDone:", isDone);

const nothing: null = null;
console.log("nothing:", nothing);

const notDefined: undefined = undefined;
console.log("notDefined:", notDefined);

const bigNumber: bigint = 9007199254740991n;
console.log("bigNumber:", bigNumber);

const uniqueId: symbol = Symbol("id");
console.log("uniqueId:", uniqueId);


// Array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];
console.log("numbers:", numbers);

// Tuple: Fixed length array with different types
const tuple: [string, number] = ["TypeScript", 2024];
console.log("tuple:", tuple);

// Enum: Named constants
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
console.log("Direction:", Direction.Up);

// Any: Allows any type (use sparingly)
let randomValue: any = "Hello";
randomValue = 42;
randomValue = true;
console.log("randomValue:", randomValue);

// Void: No return value (used in functions)
function logMessage(message: string): void {
  console.log("logMessage:", message);
}
logMessage("This is a void function");

// Never: Represents values that never occur (e.g., functions that throw errors)
function throwError(message: string): never {
  throw new Error(message);
}

// Object: Non-primitive types
const user: object = { name: "John", age: 30 };
console.log("user:", user);



