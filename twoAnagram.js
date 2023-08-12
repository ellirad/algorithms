
function validAnagram(s, t) {
    const sArray = s.split('');    
    const tArray = t.split('');    
    let obj = {};
    let isAnagram = true;


    if(tArray.length < sArray.length) return isAnagram = false

    for (let i = 0; i < sArray.length; i++) {
        const element = sArray[i];
        if(!obj[element]) obj[element] = 1;
        else obj[element] = obj[element]+ 1;
    }

    console.log(obj, 'object');

    for (let i = 0; i < tArray.length; i++) {
        const element = tArray[i];
        if(obj[element] && obj[element] > 0) {
            obj[element] = obj[element] - 1
        } else isAnagram = false
    }

    return isAnagram
}

function validAnagramSol2(s, t) {
    const sArray = s.split('');    
    const tArray = t.split('');    
    let isAnagram = true;

    
}

console.log(validAnagram('rat', 'car'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('ab', 'a'));
