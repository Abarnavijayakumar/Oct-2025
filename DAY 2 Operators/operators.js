// OPERATORS ;
// There are 8 Types of operators 
// 1. arithmetic , 2. assignment , 3. comparison , 4. logical , 5.bitwise , 6. strings , 7. types , 8. ternary

// 1 . ARITHETIC OPERATOR 
    // used for mathematical operations

    let a = 78;
    let b = 97;
    console.log(a+b); // addition = 175

    let c = 150;
    let d = 68;
    console.log(c-d); // subtraction = 82

    let x = 28;
    let y = 30;
    console.log(x*y); // multiplication = 840

    let $x = 80;
    let $y = 5;
    console.log($x/$y); // Division = 16

    let _a = 50;
    let _b = 10;
    console.log(_a%_b); // Modules 0

    let a1 = 2;
    let b2 = 10;
    console.log(a1**b2); // exponentiation

    let _x = 10;
    _x++;
    console.log(_x); // Increment , => adds 1 // = 11;

    let _y = 20;
    _y--;
    console.log(_y); // Decrement , subtracts 1 // = 19;

    // these two operators is normal ; icre and drmnt

    

    let post1 = 20; // post increment
    let post2 = post1++;
    console.log(post1 , post2); // 21 20

    let postdcr = 10; // post decrement
    let postdcr1 = postdcr--;
    console.log(postdcr,postdcr1);  // 9 10;

    let pre1 = 20; // pre increment
    let pre2 = ++pre1;
    console.log(pre1,pre2); // 21 21

    let pred1 = 20; // pre Decrement
    let pred2 = --pred1;
    console.log(pred1,pred2); // 19 19;

    // examples

    let visitors = 0; //Imagine you’re counting how many users visited your website 👇

    visitors++;
    visitors--;
    ++visitors;
    --visitors;
    visitors++;
    visitors++;
    console.log(visitors);

    let no = 3;
    no++; // 4
    ++no; // 5
    console.log(no);

    let no1 = 10;

    let no2 = no1-- + ++no1;
    console.log(no1,no2);

    //Write your own logic that starts with let score = 0 and
    //  increases every time a user “gets a point” (use increment), 
    // and decreases when they “lose a point” (use decrement).

    // 2. ASSIGNMENT OPERATOR 
    let assign = 10; // Used to assign and update values.
    
    console.log( assign += 5);
    console.log( assign -=5 )
    console.log( assign *=5);
    console.log( assign /=5);
    console.log(assign%=5);

    // 3. Comparison Operator

    //Used to compare two values and return true or false.

    let c1 = "5";
    let c2 = 5;

    console.log(c1==c2); //Equal (compares value only) 5 == "5" // true


    let c3 = "5";
    let c4 = 5;

    console.log(c3===c4);//Strict equal (value + type) checks // false
    

    let c5 = 8;
    let c6 = 10;

    console.log(c5!= c6); // Not equal (value) // true

    let c7 = 7; // "7" either string also used but the thing is not equal .
    let c8 = 5;

    console.log(c7!==c8); //Strict not equal

    let G1 = 10;
    let G2 = 8;

    console.log(G1>G2); // greater than

    let L1 = 2
    let L2 = 5

    console.log(L1<L2); // lesser than

    let GE = 2;
    let GE1 = 2;

    console.log(GE>= GE1); // greater than or Equal // true

    let less = 2;
    let less1 = 2;

    console.log(less<= less1); // less than or Equal // True

    //💡 Always prefer === and !== — they prevent type confusion.
    
    


    
    
    
    
    
    
    
    
   
   
   
    
   
    
    
    
    
    
    
    
    
    

    


    
    
    
    
    
    

    



    