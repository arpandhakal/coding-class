// Write a JavaScript program to reverse a given string.  

function solution48(){
    const resultDiv = document.getElementById("result")

    const string = window.prompt("To Reverse")

    const revArray = []
    
    for(let i = (string.length - 1); i >= 0; i--){
        revArray.push(string[i])   
    }

    resultDiv.innerHTML = revArray.join("")
}