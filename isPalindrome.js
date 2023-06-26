function isPalindrome(string) {
  string = string.toLowerCase();

  let characterArr = string.split("");
  let validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

  let lettersArr = [];

  characterArr.forEach((char) => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if (lettersArr.join("") === lettersArr.reverse().join("")) return true;
  else return false;
}


console.log(isPalindrome("madam i'm adam"))