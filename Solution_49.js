// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet. 

function solution49() {
    const resultDiv = document.getElementById("result")

    const string = window.prompt("Ereplace every character in a given string with the character following it in the alphabet")

    const result = []

    for (let i = 0; i < string.length; i++) {
        result.push(String.fromCharCode((string[i]).charCodeAt() + 1))
    }

    resultDiv.innerHTML = result.join("")

}