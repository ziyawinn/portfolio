// one function 3 conditional
// three fizz 5 buzz both fiz buzz

document.querySelector("#click").addEventListener("click",bird)
function bird(){
    let answer = document.querySelector("#test").value 

    if (answer  % 3=== 0 && answer % 5=== 0 ){ document.querySelector(".pop") .innerText ="fizzbuzz" }
    else if (answer % 3 === 0){ document.querySelector(".pop") .innerText ="fizz"


    }else if(answer % 5 === 0){ document.querySelector(".pop") .innerText ="buzz"

}
}