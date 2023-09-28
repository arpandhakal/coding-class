// Write a JavaScript program to capitalize the first letter of each word in a given string. 

function solution50(){
    const resultDiv = document.getElementById("result")

    const prompt = window.prompt("capitalize the first letter of each word")

    let arr = prompt.split(" ")
    let result = []
    let eachWord

    for(let i = 0; i < arr.length; i++){
        eachWord = arr[i]
        result.push((eachWord[0]).toUpperCase() + eachWord.slice(1,))
    }

    resultDiv.innerHTML = result.join(" ")
}   