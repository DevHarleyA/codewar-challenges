/* Coding in function padIt, function accept 2 parameters:

str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
n, it's a number, how many times to pad the string.
Behaviour
You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.*/

// Lesson Learned: We don't want to directly manipulate the parameters of a function. Make a copy!

function padIt(str,n) {
    let num = 1
    let newString = str.slice()
    // MDN: extracts a section of a string and returns it as a new string, without modifying the original string
    // makes a copy of the string
    while (num <= n){
      num++
      if (num%2 == 0) {
        newString = "*" + newString
      } else {
        newString = newString + "*"
      }
    }
    return newString
    //write a loop statement that loops n times
    //each time through the loop, add * to the left, then * to the right of the str
    //when the loop is complete, return the new str
    //return ended the function
  }