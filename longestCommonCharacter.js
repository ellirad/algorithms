// function to find the common prefix of two strings
function commonPrefix(str1, str2) {
  let result = "";
  const n1 = str1.length;
  const n2 = str2.length;

  for (let i = 0, j = 0; i < n1 && j < n2; i++, j++) {
    if (str1[i] == str2[j]) result += str1[i];
    else break;
  }
  return result;
}

function longestCommonPrefix(array) {
  // if array is empty, return empty string
  if (array.length == 0) {
    return "";
  }
  // if array has only one string, return that string
  if (array.length == 1) {
    return array[0];
  }

  // find the middle of array
  let mid = Math.floor(array.length / 2);
  let left = longestCommonPrefix(array.slice(0, mid));
  let right = longestCommonPrefix(array.slice(mid));
  return commonPrefix(left, right)
}
let array = ["geeksforgeeks", "geeks", "geek", "geezer"];
console.log(longestCommonPrefix(array), 'test');


// word by word algorithm:
// Javascript Program to find the longest common prefix
	
	// A Utility Function to find the common prefix between
	// strings- str1 and str2
	function commonPrefixUtil(str1,str2)
	{
		let result = "";
		let n1 = str1.length, n2 = str2.length;
		// Compare str1 and str2
		for (let i = 0, j = 0; i <= n1 - 1 && j <= n2 - 1; i++, j++) {
			if (str1[i] != str2[j]) {
				break;
			}
			result += str1[i];
		}

		return (result);
	}
	
	// A Function that returns the longest common prefix
	// from the array of strings
	function commonPrefix(arr,n)
	{
		let prefix = arr[0];
		
		for (let i = 1; i <= n - 1; i++) {
			prefix = commonPrefixUtil(prefix, arr[i]);
		}

		return (prefix);
	}
	
	// Driver program to test above function
	let arr=["geeksforgeeks", "geeks",
			"geek", "geezer"];
	let n = arr.length;
	let ans = commonPrefix(arr, n);
	if (ans.length > 0) {
		console.log("The longest common prefix is - ",
				ans);
	} else {
		console.log("There is no common prefix ");
	}
	