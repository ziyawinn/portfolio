// place bomber man in middle of the page
// ?bomberman goes left
// bomber man goes right
// bomberman goes up
// bomberman goes down
// asistance from kianny guthernberg





let player = document.querySelector (".player"); 
document.addEventListener ("keydown", move)
let upDown= 0
let leftRight=0

function move (event){
    if(event.code ==="ArrowDown"){
       upDown +=100
       player.style.transform = `translate(${leftRight}%,${upDown}%)`
    }
    else if(event.code ==="ArrowUp"){
        upDown -=100
        player.style.transform = `translate(${leftRight}%,${upDown}%)`   
    }
    else if(event.code ==="ArrowLeft") {
        leftRight -=100
         player.style.transform = `translate(${leftRight}%,${upDown}%)` 
    }
    else if(event.code ==="ArrowRight"){
        leftRight +=100
        player.style.transform = `translate(${leftRight}%,${upDown}%)`         
    }
    else{
console.log ("hello")
}

}