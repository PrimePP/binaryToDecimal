//selecting elements
const binaryNum = document.getElementById("binary");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
//converts binary to decimal
const binToDec = function (num) {
    let decNumber = 0;
    let base = 1;
  if (checkBinaryNum(num)) {
    console.log("It's a binary number");
    while (num !== 0) {
        const rem = num%10;
        decNumber = decNumber + (rem * base);
        base = base * 2; 
        num = Math.floor(num / 10);
    }
  } else {
    alert("Binary Numbers contains only 0s and 1s. Let's try again 🎉🎉");
  }
  return decNumber;
};

//checks the entry number is binary or not
const checkBinaryNum = (num) => {
  let isBinary = true;
  while (num !== 0) {
    const rem = num % 10;
    if (rem !== 0 && rem !== 1) {
      isBinary = false;
      return isBinary;
    }
    num = Math.floor(num / 10);
  }
  return isBinary;
};

//handling the click event
btn.addEventListener('click',function(e) {
    e.preventDefault();
    const enteredValue = Number(binaryNum.value);
    console.log(enteredValue);
    const decNumber = binToDec(enteredValue);
    console.log(decNumber);
    result.textContent = `Decimal Number : ${decNumber}`
})
