//localStorage

const display = document.getElementById('count')
const btn = document.getElementById('count-btn')

let count = 0;
display.textContent = count 

btn.addEventListener("click", () => {
    count++
    display.textContent = count
    localStorage.setItem("keyName", count);

})

display.textContent = localStorage.getItem("keyName")

