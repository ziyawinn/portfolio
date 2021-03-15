// psedo code
// numbers  add up or sub or multiply or Divede
// buttons work as stated
// im grabbing the input



// working with the Dom
document.querySelector('#add').addEventListener ('click', addition)
document.querySelector('#subtraction').addEventListener ('click', subtraction)
document.querySelector('#multiply').addEventListener ('click', multiply)
document.querySelector('#divide').addEventListener ('click', divide)


function addition(){

    let inputOne = parseInt(document.querySelector('#first').value )
    let inputTwo = parseInt(document.querySelector('#second').value)
    let answer = document.getElementById('answer')
    let total = inputOne + inputTwo
    console.log(total)
    answer.innerHTML = total;

    }



    addition()

function subtraction(){
console.log('hi')
    let inputOne = parseInt(document.querySelector('#first').value )
    let inputTwo = parseInt(document.querySelector('#second').value)
    let answer = document.getElementById('answer')
    let total = inputOne - inputTwo
    console.log(total)
    answer.innerHTML = total;

}

function multiply(){
        let inputOne = parseInt(document.querySelector('#first').value )
        let inputTwo = parseInt(document.querySelector('#second').value)
        let answer = document.getElementById('answer')
        let total = inputOne * inputTwo
        console.log(total)
        answer.innerHTML = total;
    
}
function divide(){
            let inputOne = parseInt(document.querySelector('#first').value )
            let inputTwo = parseInt(document.querySelector('#second').value)
            let answer = document.getElementById('answer')
            let total = inputOne / inputTwo
            console.log(total)
            answer.innerHTML = total;
        
        
}

