// we are going to learn about conditional statements

// what is conditional statements ?
  // the conditional statements are used to make a decision in your program !
        // They check conditions (true or false) and execute code based on the result.

        // nested if

        // syntax
        /**  if (conditon1){
         
         
            if(condition2){
               *  // code when both condition1 & condition2 are true
            }
            else{
              // condition1 true but condition2 false
            }

        } else{
               // condition1 false
        } **/

    // check if number is positive- then check even/odd.
    
    let num = 10;

    if(num > 0){
      if (num % 2 === 0) {
        console.log("positive even");
      }
      else{
        console.log("positive odd");
      }
    } 
    else{
      console.log("not a positive number");
      
    } 

   /**  ⭐ But IMPORTANT FACT

In big real-world projects, we reduce nested if-else when:

✔ Too many levels → makes code messy
✔ Hard to read
✔ Hard to maintain

Instead we use:

Functions
Switch case
Early returns
Validation helper methods
Design patterns
Because cleaner code = easier to maintain. **/

//If user is logged in → then check if user is admin.
let isLoggedIn = true;
let role = "admin";

if (isLoggedIn) {
  if (role === "admin") {
    console.log("wlecome Admin");
  }
  else{
    console.log("welcome User");
  }
} else{
  console.log("please login First");
  
}
    

    
    
  
     
        
        
        