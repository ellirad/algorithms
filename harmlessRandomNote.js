function harmlessRandomNote(noteText, magazineText) {
  let noteArr = noteText.split(" ");
  let magazineArr = magazineText.split(" ");
  let magObj = {};

  // Create an object base on words in an array
  magazineArr.forEach((word) => {
    if (!magObj[word]) magObj[word] = 0;
    magObj[word]++;
  });

  let noteIsPossible = true;
  // Loop over noteArr array in order to match word
  noteArr.forEach((word) => {
    if (magObj[word]) {
      magObj[word]--;
      if (magObj[word] < 0) noteIsPossible = false;
    } else noteIsPossible = false
  });

  return noteIsPossible;
}


console.log(harmlessRandomNote('this is for test', 'this is for test also'))