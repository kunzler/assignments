//Write a function that accepts two numbers as parameters, and returns the sum.
mySum = (x, y) => {
    return x + y;
}
console.log( mySum (5, 4));
//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
largestOfThree = (x, y, z) => {
    return Math.max(x, y, z)
}

//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
evenOrOdd = (x) => {
    if (x % 2 === 0){
        return "even";
    }else return "odd";
}
console.log(evenOrOdd(9));

//Write a function that accepts a string as a parameter. If the length of the string is
//less than or equal to twenty characters long, return the string concatenated with itself 
//(string + string). If the string is more than twenty characters long, return the first half of the string.
stringManipulated = (aString) => {
    if (aString.length < 20) {
        return aString + aString;
    } else return aString.substring(0, aString.length/2);
} 
console.log(stringManipulated("sucka"));
console.log(stringManipulated("suckasuckasuckasuckasuckasucka"));

//Write a function that accepts a number ‘n’ as a parameter. Then print the first 
//‘n’ Fibonacci numbers and return their sum.

myFibo = (fibLength) => {
    let x = 0   
    let y = 1
    let z = 1
    let sum = 0;
    for ( let i = 0; i < fibLength; i++){
        console.log(x + ",");
        sum = sum + x;
        z = z + x;
        x = y;
        y = z;
    } 

    return sum;
 
} 

console.log(myFibo(6));