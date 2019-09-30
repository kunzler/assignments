'use strict';
let readline = require('readline-sync');
let monstersKilled = 0;
let i = 0;
let isAlive = true;
let choice = 'none';
let fight = true;
let person = {
	name: 'player 1',
	weapon: 'stick',
	status: 'alive',
	health: 100
};
// let monster = {
// 	name: 'Proud Boy',
// 	weapon: 'bat',
// 	status: 'alive',
// 	health: 100
// };

// functions ////////////
function newRand (num) {
	return Math.floor(Math.random() * num);
}
function healthHit (num = 0) {
    person.health = person.health - newRand(num);
	if (person.health <= 0) {
		death();
	}
	console.log(`your health is: ${person.health}`);
}
//////
function getName () {
    console.log(`
    Welcome brave knight, you have been giving another chance at the eternal iteration.
    With luck, you will prevail
    `);
	person.name = readline.question('What would you like to be known by in this Life Cycle? ');
}
function greeting () {
	console.log(
		`
        Hello ${person.name}. May she bless you on your quest
    
        `
	);
}
function menu () {
	let choices = [ 'walk', 'stats', 'quit' ];
	let index = readline.keyInSelect(choices, `make your choice`);
	return choices[index];
}
function walking () {
	console.log(`__--__--__walking__--__--___--`);
	if (fight == newRand(3)) {
		console.log(`*************An enemy has appeared***********`);
		return true;
	} else {
		console.log(`No dark knights, witches or monsters today. live to fight another day`);
		return false;
	}
}
///monster
function monsterAppears () {
	let monsters = [ 'Killer Rabbit', 'Knight who say Ni', 'Taunting Frenchman', 'huh' ];
	return monsters[newRand(3)];
}
function fightOrFlight () {
	let newMonster = monsterAppears();
	console.log(`

    Lo from the depths of hell a rabid ${newMonster} bent on 
    cutting, has arisen ＼(◎o◎)／ Whatever will you do?
    
    fight or flight, choose:`);
	let choices = [ 'fight', 'flight' ];
	let index = readline.keyInSelect(choices, 'will you fight or run away ');
	return choices[index];
}
function attack () {
	if (isAlive != newRand(4)) {
		console.log(`you win the fight ****************************  ${isAlive}`);
		monstersKilled++;
        //person.health = person.health - newRand(5);
        healthHit(5)
		if (newRand(5) === 1) {
			if (person.weapon != 'sword') {
				person.weapon = 'sword';
				console.log('You have found the forbidden sword of air');
			}
		}
		return isAlive;
	} else console.log('you lost, this time');
	return (isAlive = false);
}
function runAway () {
	if (isAlive == newRand(2)) {
		person.health = healthHit(15);
		console.log('successfully you was escaped');
		return isAlive;
	} else {
        console.log(`You died, again. Better luck next time. Always look
        on the bright side of death `);
		return (isAlive = false);
	}
}
function death () {
	console.log('Your life has ended too soon');
	return (isAlive = false);
}
//////////////////////// main ////////////////////////
getName();
greeting();
while (isAlive) {
	console.log(`your health is: ${person.health}`);
	choice = menu();
	if (choice == 'quit') {
		console.log('quiting');
		return death();
	} else if (choice == 'walk') {
		console.log('you chose walk');
		fight = walking();
	} else if (choice == 'stats') {
		console.log(`checking stats...
        
        you have a ${person.weapon}
        and your health is: ${person.health}
        Monster kills total: ${monstersKilled}
        Days survived is: ${i}
        `);
	}
	if (fight == true) {
		choice = fightOrFlight();
		if (choice == 'fight') {
			console.log(' an epic fight ensues...');
			isAlive = attack();
		} else if (choice == 'flight') {
			console.log('fear got the best of you. "Runaway!" "');
			isAlive = runAway();
		}
	}
	i = i + 1;
	console.log(`
        GG. Congrats on surviving ${i} sun cycles and killing
        ${monstersKilled} monster(s)
        `);
	if (person.health <= 0 || isAlive == false) {
		console.log(` 
        
            But you have come to your end 
        *** *** *** *** ************* *** *** *** ***
        ***************** GAME OVER *****************
        *** *** *** *** ************* *** *** *** ***
        `);
		isAlive = false;
	}
}
