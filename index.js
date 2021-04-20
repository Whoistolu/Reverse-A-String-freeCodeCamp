function reverseString(str) {
    let sArr = str.split("");
    let rsArr = sArr.reverse();
    let reversedS = rsArr.join("");
    return reversedS;
  }
  console.log(reverseString("hipopotemous"));