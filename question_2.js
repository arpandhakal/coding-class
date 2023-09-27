const a = prompt("Enter a string : ")
let arrayChar = [];
for(let i=0; i<a.length;i++){
    arrayChar.push(String.fromCharCode((a[i]).charCodeAt() + 1))
}
console.log(arrayChar.join(""))