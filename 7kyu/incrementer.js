/* Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that
Examples:
[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
                                       #  9+3 = 12  -->  2 */

// My Solution

function incrementer(nums) { 
    // declare results array
    let results = []
    let num
    // return if nums array is empty
    if (nums.length === 0) {
      return []
    }
    // if the array has numbers in it, loop through the array to increment each number starting at 1
    for (let i = 0; i < nums.length; i++) {
      num = nums[i] + (i+1)
      // if the number is one digit, then push it to the array
      if (num < 10) {
        results.push(num)
        // if it is not, then divide it by 10 and send the remainder (second digit)
      } else {
        num = Math.floor(num % 10)
        results.push(num)
      }
      
    }
    return results
  }
  
  // Parameter: an array of digits
  // Return: if array is empty, return it, if not return an array of single digit numbers. 
  // If the sum is double digits, return the second digit
  // Example: [1, 2, 3] => [2,4,6] (ie. 1+1, 2+2, 3+3)
  // Pseudo-code

// Best Solution

function incrementer(num) {
    return num.map((a, i) => (a + i + 1) % 10);
}

function incrementer(num) {
    var arr = [];
    for (var i = 0; i < num.length; ++i)
        arr.push((num[i] + i + 1) % 10)
    return arr;
}