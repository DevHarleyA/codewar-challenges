/* Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

If you forgot how to push an element to array, please refer to lesson 4. */

// My Answer
function pickIt(arr){
    var odd=[],even=[];
    //coding here
    // write a for loop to traverse the array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]%2 !== 0) {
        odd.push(arr[i])
      } else {
        even.push(arr[i])
      }
    }
    
    return [odd,even];
  }

// Best Answer

function pickIt (arr) {
  
    let odd = []
    let even =[]
        
    for (var x of arr) {
        ((x % 2) ? odd : even).push(x)    
    }
        
    return [odd, even]
  }