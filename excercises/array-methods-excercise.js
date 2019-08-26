var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
// Remove the last item from the vegetable array.

vegetables.pop()
// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

// Remove the first item from the fruit array.

fruit.shift()
// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);


// Find the index of "orange."

console.log(fruit.indexOf("orange"))
// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);


// Add that number to the end of the fruit array.
fruit.push(fruit.indexOf("orange"))
// Use the length property to find the length of the vegetable array.
console.log(vegetables.length)
// Add that number to the end of the vegetable array.
vegetables.push(vegetables.length)
// Put the two arrays together into one array. Fruit first. Call the new Array "food".
food = fruit.concat(vegetables)

console.log("food: ", food);

// Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2)
console.log("food: ", food);

// Reverse your array.
food = food.reverse()
console.log("food: ", food);

// Turn the array into a string and return it.

console.log(food.join())
