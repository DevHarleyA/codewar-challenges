/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. */



// My Solution
function squareSum(numbers){
    // set a variable for the array (argument)
      let arr = numbers
    // set a variable for the sum to return
      let sum = 0
    // loop through each item in the array, square it, then add it to the next
      for (let i = 0; i < arr.length; i++) {
        // square each number in the array and add it to sum
        sum += arr[i] ** 2
      }
    // return sum
      return sum
    }
    
    // Parameters: An array of numbers
    // Return: The squares of each numbers then added together (sum)
    // Example: [1,2,2] => 1^2 + 2^2 + 2^2 = 9
    // Pseudo-code: we want to perform an action on each item in the array, then add everything together

// Best Solution
function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }