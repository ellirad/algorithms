// function isPalindrome(string) {
//   string = string.toLowerCase();

//   let characterArr = string.split("");
//   let validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

//   let lettersArr = [];

//   characterArr.forEach((char) => {
//     if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
//   });

//   if (lettersArr.join("") === lettersArr.reverse().join("")) return true;
//   else return false;
// }

// With two pointer

function isPalindrome(string) {
  let strArr = string.toLowerCase().split("");
  let left = 0;
  let right = strArr.length - 1;
  console.log(strArr);

  let validAlphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789".split("");

  function isValidChar(s) {
    if (validAlphaNumeric.indexOf(s) > -1) return true;
    else return false;
  }

  while (left < right) {
    console.log(strArr[left], strArr[right]);
    if (!isValidChar(strArr[left])) left++;
    else if (!isValidChar(strArr[right])) right--;

    else if (strArr[left] === strArr[right]) {
      left++;
      right--;
    }
    else return false;
  }
  return true;
}

// console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
