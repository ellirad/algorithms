function encode(array) {
    let hashTable = {};
    for (let i = 0; i < array.length; i++) {
        hashTable[i] = array[i];
    };
    return JSON.stringify(hashTable);
}

function encode2(str, num) {
	let alphabetic = "abcdefghijklmnopqrstuvwxyz".split("");
	let newString = "";

	for (let i = 0; i < str.length; i++) {
		const element = str[i];
		if(element === ' ') {
			newString += ' ';
			continue;
		}

		let currentIndex = alphabetic.indexOf(element);
		let newIndex = currentIndex + num;

		if (newIndex > 25) newIndex = newIndex - 26
		if (newIndex < 0 ) newIndex = 26 + newIndex;

		newString += alphabetic[newIndex];
	}
	console.log(newString)
}

let str = encode(['eat', 'sleep', 'ate', 'ziiiiiiiiiiiiiiiiiiii', '', ';']);
console.log(str)
console.log(decode(str));
encode2('zoo topia', 1)

function decode(str) {
    let ans = [];
    let hashTable = JSON.parse(str);
    Object.keys(hashTable).map(item => {
        ans[item] = hashTable[item];
    });
    return ans;
}
