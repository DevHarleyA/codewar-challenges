/* Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

// My Solution

function grow(x){
    // declare our return value
    let sum = 1
    // sort through the array to put it in order
    let arr = x.sort()
    // loop through the array and multiply them
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
      sum *= arr[i]
    }
    return sum
  }
  
  // Parameters: Array of numbers, no empty arrays
  // Return: result of multiplying the values in order
  // Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
  // Pseudo-code

// Best Solution

const grow=x=> x.reduce((a,b) => a*b);