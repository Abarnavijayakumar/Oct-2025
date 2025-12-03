//Create a variable for each data type and print their type using typeof.\

let str = "abarna";
let age = 21;
let boll = true;
let unde ;
let nul = null;
let int = 1111n;
let id = Symbol("id");

console.log(`${typeof str} ${typeof age} ${typeof boll} ${typeof unde} ${typeof nul} ${typeof int} ${typeof id}`);

//Try reassigning a const variable → observe the error.

const assign = 21;
//  assign = 22; // error

//Create an object student with properties (name, age, dept) and print one property.

let obj = {
    name : "abee",
    age : 21 ,
    role : "developer",
    gender : "female"
   
}
console.log(obj.name);
console.log(obj);

//Create an array colors and print the 2nd item.

const items = ["apple","orange","banana"]

console.log(items);
console.log(items[0]);

// toString method;
//The toString() method converts a value (number, boolean, array, date, etc.) into a string.
//It does not change the original variable — it just returns a string version of it.

// 1. NUmber

let num = 123;
let strnum = num.toString();
console.log(strnum); // 123 ////Useful when you need to join numbers with text or manipulate digits as strings.

// 2.Boolean → String

let isReady = true
let StrBol = isReady.toString();
console.log(StrBol); // true

// 3. Array → String

let arr = ["red", "blue", "green"];
let colors = arr.toString()
console.log(colors); // Banana,Orange,Apple,Mango //When you use toString() on an array, it joins the elements into a comma-separated
//🧠 Note: It’s similar to join(","), but join() gives more control (you can change the separator).

//4. Date → String
const d = new Date();

let text = d.toString();
console.log(text); //Converts a Date object to a human-readable string.

//5. Objects → String
let person = {Name : "sri",Age:26}
let strobj = person.toString()
console.log(strobj); //[object Object] //When used on a normal object, it usually returns "[object Object]".

console.log(JSON.stringify(person)); //{"Name":"sri","Age":26}
//To convert an object to a readable string, use JSON.stringify(person) instead.

//6. Base Conversion for Numbers
//You can use toString(base) to convert numbers into different bases like binary, octal, or hexadecimal.
let Num = 10;

console.log(Num.toString(2));  // "1010"  → binary
console.log(Num.toString(8));  // "12"    → octal
console.log(Num.toString(16)); // "a"     → hexadecimal

//7. Common Mistakes
//Don’t use it on null or undefined, it will throw an error:
let x = null;
//  console.log(x.toString()); // ❌ TypeError

// ✅ Instead, use the global String() function:

console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"




const fruits = ["Banana", "Orange", "Apple", "Mango"];

let myList = fruits.toString();
console.log(myList);

// 1️⃣ Coffee Shop Billing
// A coffee costs ₹120.
// You bought 2 cups

let coffee = 120;
let quantity = 2;
let total = coffee * quantity;
console.log(total);











