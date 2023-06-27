function caesarCipher(str, num) {
  let lowerCaseString = str.toLowerCase();
  let alphabetic = "abcdefghijklmnopqrstuvwxyz".split("");
  let newString = "";

  for (let i = 0; i < lowerCaseString.length; i++) {
    const element = lowerCaseString[i];
    if(element === ' ') {
        newString += ' ';
        continue;
    }

    let currentIndex = alphabetic.indexOf(element);
    let newIndex = currentIndex+ num;

    if(newIndex > 25) newIndex = newIndex - 26;
    if(newIndex < 0 ) newIndex = 26 + newIndex;

    newString += alphabetic[newIndex]; 
  }
  console.log(newString)
};

caesarCipher('zoo topia', 1)
