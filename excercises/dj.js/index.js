mySquare = document.getElementById("mySquare")



 function doubleClick(){
     mySquare.style.backgroundColor = "green"
    }
function scroll(){
    mySquare.style.backgroundColor = "orange"

}

function mousemoved(){
    mySquare.style.backgroundColor = "orange"
}

function mousedown(){
    mySquare.style.backgroundColor = "blue"

}

function mouseup(){
    mySquare.style.backgroundColor = "yellow"

}

mySquare.addEventListener("dblclick", doubleClick)
mySquare.addEventListener("mousemove", mousemoved)
mySquare.addEventListener("mousedown", mousedown)
mySquare.addEventListener("mouseup", mouseup)

