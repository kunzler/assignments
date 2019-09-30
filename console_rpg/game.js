//variables
let gameOn = true;
const readLine = require('readline-sync');
const name = "player";
let randNum = 1;
inventory = {
    weapon: "stick";
}
// functions
function getName(){
    // what is your name
    console.log("dude, what's your name?")
    const name = readLine();    
}
function greeting(name){
    // hello name
    console.log(`Welcome to this adventer, ${name}`);
}
function whatToDo(){
    console.log(` ${name}, make your choice`);
    //readline
    return choice
}
function walking (){
    // walking
    console.log(" walking  ")
  /*  
    // enemy appears?
    randNum =  Math.floor(Math.random() * 4)
    if (randNum = 4){
	generateEnemy();
    
	// attack or run
	attackOrRun();
    }
  
    */
}
function generateEnemy(){}
function attackOrRun(){}
function attack(){}
function run(){}
function enemyAttack(){}
function attackResults(){}
function newItem(){}
function death (){}



//game

