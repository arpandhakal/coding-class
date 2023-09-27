const a = prompt("Enter a string");
let arraychar = []
for(i=0;i<a.length;i++){
    arraychar.push(String.fromCharCode(a.charCodeAt(i)+1));
    
    console.log(arraychar.join(""))
}

