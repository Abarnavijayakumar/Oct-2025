// 1️⃣ Create a variable to store the counter value → start with 0
let count = 0;

//2️⃣ Connect buttons to JavaScript using IDs
const countValue = document.getElementById("countValue")
const incrementBtn = document.getElementById("incrementBtn")
const decrementBtn = document.getElementById("decrementBtn")
const resetBtn = document.getElementById("resetBtn")

//3️⃣ Write functions that run on button clicks

incrementBtn.addEventListener("click", function(){
 count++;
 countValue.innerText = count;
})

decrementBtn.addEventListener("click",function () {
    if (count > 0) {
        count--;
        countValue.innerText = count;
        /** 💡 So full meaning:
         The counter will decrease only if the number is above 0.
         If the number is already 0, it will NOT go into negative numbers.**/
        }
    })

        
resetBtn.addEventListener("click", function () {
count = 0;
countValue.innerText = count;
    
});