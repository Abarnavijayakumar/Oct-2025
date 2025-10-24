// step 1 = declare variables , u need variales to hlod weight and height

let weight = 60; // in kilograms
let height = 165; // in cm
//➡️ Here, you’re just assigning values.
// You can change the numbers to test different cases.

// step 2 = covert heightto meters , Since BMI formula uses meters, convert cm to m.

let heightInMeters = height / 100;

// step 3 = alculate BMI , use the BMI formula
let bmi = weight / (heightInMeters  * heightInMeters);

// step 4 = Display result , show the BMI value

console.log("your BMI is:",bmi);

let myweight = 64;
let myheight = 165;
let myFriendWeight = 73;
let myFriendHeight = 170;

let myHeightInMeters = myheight / 100;
let myFriendHeightInMeters = myFriendHeight / 100;

let myBMI = myweight / (myHeightInMeters * myHeightInMeters)
let friendBMI = myFriendHeight / (myFriendHeightInMeters * myFriendHeightInMeters)

let higherBMI = myBMI > friendBMI; //Logical comparison (>) → true/false results.

console.log("Is my BMI higher?",higherBMI);







