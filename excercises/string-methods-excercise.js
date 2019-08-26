// /* Make a function that will return any given string into all caps followed 
//by the same string all lowercase.

capilizeAndLowercase = (givenString) => {
    return (givenString.toUpperCase() + givenString.toLowerCase());
}
console.log(capilizeAndLowercase("someRandoString"))

 capilizeAndLowercase("Hello"); // => "HELLOhello"

 // Make a function that returns a number half the length, and rounded down.
// You'll need to use Math.floor().
findMiddleIndex = (stringToIndex) => {
return (Math.floor(stringToIndex.length/2)) }

 findMiddleIndex("Hello") // => 2
 findMiddleIndex("Hello World") // => 5


// Make a function that uses slice() and the other functions you've written to 
//return the first half of the string
returnFirstHalf = (toBeHalved) =>{
    midIndex = findMiddleIndex(toBeHalved)
    return (toBeHalved.slice(0, midIndex));
}
console.log(returnFirstHalf("Hello")) // => "He"
 console.log(returnFirstHalf("Hello World")) // => "Hello"
// Make a function that takes a string and returns that string where the first half 
//is capitalized, and the second half is lower cased. (If the string length is odd, 
//capitalize the shorter of the first half.)
capilizeAndLowercase = (toBeCapitalizeAndLowerCased) => {
   firstHalf = returnFirstHalf(toBeCapitalizeAndLowerCased)
   firstHalf = firstHalf.toUpperCase()
   lowerCased = toBeCapitalizeAndLowerCased.toLowerCase;
   return firstHalf + toBeCapitalizeAndLowerCased.slice(toBeCapitalizeAndLowerCased.length/2)

}

console.log(capilizeAndLowercase("Hello")) // => "HEllo"
 console.log(capilizeAndLowercase("Hello World")) // => "HELLO world"
// Optional Code Challenge (This one is a step up in difficulty):

// Make a function that takes any string and capitalizes any character that follows a space.

// capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"
// */