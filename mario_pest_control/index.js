const monsters = document.monsters

const gV = 5 
const bV = 7
const cV = 11 

monsters.addEventListener("submit", function(e){
    e.preventDefault()

    const goombas = gV * Number(monsters.goomBas.value);
    const cheepcheep = cV * Number(monsters.cheepCheep.value);
    const bobombs = bV * Number(monsters.bobOmbs.value);
    
    let total = goombas + bobombs + cheepcheep;
    let totalDom = document.getElementById("totalP").innerHTML = 
    `The total number of coins you get is ${total}`

})