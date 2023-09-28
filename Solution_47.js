// Write a JavaScript program to check whether a given number exists in the range 40..10000. 
// For example 40 presents in 40 and 4000

function solution47() {
    const resultDiv = document.getElementById("result")

    let inputNumber = window.prompt("to check whether a given number exists in the range 40..10000")
    const input_string = inputNumber.toString()

    const results = []
    
    if(isNaN(parseInt(inputNumber))){
        resultDiv.innerHTML = "Not a number"
    } else if (inputNumber >= 40 && inputNumber <= 10000) {
        for (let i = 40; i <= 10000; i++) {
            let i_string = i.toString()
            if (i_string.includes(input_string)) {
                results.push(i_string)
            }
        }
        resultDiv.innerHTML = results.join(" <br> ")
    } else {
           resultDiv.innerHTML = "Out of range"
    }

}