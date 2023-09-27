function count(sentence, countInput) {
  let sentenceArray = sentence.split(" ");
  let count = 0;
  for (i = 0; i < sentence.length; i++) {
    if (sentenceArray[i] == countInput) {
      count = count + 1;
    }
  }
  return count;
}

let a = count("my name is subham my surname is subham the", "the");
document.querySelector("#header").innerHTML = "headasdas";
//commeting new things
