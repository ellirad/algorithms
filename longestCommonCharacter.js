// function to find the common prefix of two strings
function commonPrefix(str1, str2) {
  let result = "";
  const n1 = str1.length;
  const n2 = str2.length;

  for (let i = 0, j = 0; i < n1 && j < n2; i++, j++) {
    if (str1[i] == str2[j]) result += str1[i];
    else break;
  }
  console.log(result, 'result');
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
  console.log(left, right);
  return commonPrefix(left, right)
}
let array = ["geeksforgeeks", "geeks", "geek", "geezer", 'geelack'];
console.log(longestCommonPrefix(array), 'test');

// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) {
//         return '';
//     }
//     let ans = strs[0];
//     for (let i = 1; i < strs.length; i++) {
//         while (strs[i].indexOf(ans) !== 0) {
//             ans = ans.substring(0, ans.length - 1);
//             if (ans === '') {
//                 return '';
//             }
//         }
//     }
//     return ans;
// };

// console.log(longestCommonPrefix(['test', 'trest']), 'aolief')
