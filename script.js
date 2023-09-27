function rangeCheck(number) {
  return number >= 40 && number <= 10000;
}

function reverseString(stringInput) {
  let reversed = "";
  for (let i = stringInput.length - 1; i >= 0; i--) {
    reversed += stringInput[i];
  }
  return reversed;
}

function replaceAlphabet(stringInput) {
  let result = "";
  for (let i = 0; i < stringInput.length; i++) {
    let charCode = stringInput.charCodeAt(i);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      charCode = charCode + 1;
      result += String.fromCharCode(charCode);
    } else {
      result += stringInput[i];
    }
  }
  return result;
}

function capitalizeFirstLetterOfWords(stringInput) {
  const words = stringInput.split(" ");
  let capitalized = "";
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (i > 0) {
      capitalized += " ";
    }
    capitalized += word.charAt(0).toUpperCase() + word.slice(1);
  }
  return capitalized;
}

function convertToHoursAndMinutes(number) {
  const hours = Math.floor(number / 60);
  const minutes = number % 60;
  return `${hours} hours and ${minutes} minutes`;
}

// Perform the tasks
const numberToCheck = prompt("Enter number to check");
const originalString = "Hello, World!";
const stringInput = "Hello, World!";
const numberToConvert = 135;

const rootdiv = document.getElementById("root");
rootdiv.innerHTML += `<p>Task 47: ${
  rangeCheck(numberToCheck)
    ? `${numberToCheck} is in the range 40..10000`
    : `${numberToCheck} is not in the range 40..10000`
}</p>`;
rootdiv.innerHTML += `<p>Task 48: ${reverseString(originalString)}</p>`;
rootdiv.innerHTML += `<p>Task 49: ${replaceAlphabet(stringInput)}</p>`;
rootdiv.innerHTML += `<p>Task 50: ${capitalizeFirstLetterOfWords(
  stringInput
)}</p>`;
rootdiv.innerHTML += `<p>Task 51: ${convertToHoursAndMinutes(
  numberToConvert
)}</p>`;
