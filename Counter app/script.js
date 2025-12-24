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
 countValue.style.transform = "scale(1.2)";

 setTimeout(() => {
    countValue.style.transform = "scale(1";
    
 }, 150);

    if (count > 0) {
        countValue.style.color = "green";
        decrementBtn.disabled = false;
    } else {
        countValue.style.color = "black";
        
    }
})

decrementBtn.addEventListener("click",function () {
    if (count > 0) {
        count--;
        countValue.innerText = count;
         countValue.style.transform = "scale(1.2)";

         setTimeout(() => {
    countValue.style.transform = "scale(1";
    
 }, 150);

        /** 💡 So full meaning:
         The counter will decrease only if the number is above 0.
         If the number is already 0, it will NOT go into negative numbers.**/
        }

        if (count === 0){
            decrementBtn.disabled = true;
            countValue.style.color = "black";
        }
    })

    resetBtn.addEventListener("click", function () {
    count = 0;
    countValue.innerText = count;
    countValue.style.color = "black";
    decrementBtn.disabled = true;
        
    });

    /**🌍 Real-world confirmation

You’ll see this everywhere:
  --> Why did we disable the decrement button instead of just letting it do nothing?
  preventing from unnecessary actions is a better user experience.
Examples:
E-commerce → “−” disabled when quantity is 1
Forms → Submit disabled until inputs are valid
OTP screens → Resend disabled for 30 seconds
Media players → Pause disabled when nothing is playing
Same mindset. Same logic. */
        