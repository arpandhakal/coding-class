let number = prompt("Enter any number : ");
let array = [];
if(isNan(parseInt(a))){
    console.log("nan");
}
else if(parseInt(a) < 40 || parseInt(a) < 10000){
    console.log("out of range");
}
else{
    for (let i = 40; i < 10000; i++) {
    const b = i.toString();
    if(b.includes(a.toString())){
        array.push(i);
    }
  } 
  console.log(array)
}