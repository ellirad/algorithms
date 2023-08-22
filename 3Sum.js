/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 /*
 1. check the length of nums, if its 3 and sum is more than zero return an empty array as answer.
 2. divide the lenght of array into 3 to get the lenght of answer.
 3. create an array with 3 zero: [0, 0 , 0].
 4. pick one random number from nums, then pick second, check the euality condition and if it's not true pick another, if true split those numbers from nums. repeat 3 in order to find the right answer.
 5. create a variable to set your prefered and third number, first search for that number in nums, then replace first item with the given array with two condition:     A. not equal with the two   B. sum is zero.
 6. repeat 4 for the second and third if do not find the triplets.
 7. check the length of answer if it is equal to number 2 we're done.
 8. repeat 1 to 7.  
 */

 var threeSum = function(nums) {
    let answer = [];
    let lenghtOfAnswer = Math.floor(answer.length / 3);
    
    if(nums.length === 3) {
        if(checkSum(nums)) return nums;
        else return answer;
    }

    let temp = [sums[0] , sums[1], 0];

    if(sums.find(num => num === preferedNum)) { 
        temp.push(preferedNum);

        if(lenghtOfAnswer === temp.length) return answer.push(temp);
    }


    
    function preferedNum () {
        let _num;
        if(sums[0] + sums[1] + _num === 0) return _num 
    }

    function checkSum(array) {
     const sum = array.reduce((partialSum, a) => partialSum + a, 0);
     if(sum === 0) return true;
     else return false
    }


};