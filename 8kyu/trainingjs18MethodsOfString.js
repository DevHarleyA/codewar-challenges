// Prompt

/* Implement a function which accepts 2 arguments: string and separator.

The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

For example:

splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!" */

// My Response

function splitAndMerge(string, separator) {
    let str = string.split(" ")
    let answer = []
    str.forEach(element => {
      let x = element.split("")
      x = x.join(separator)
      answer.push(x)
    })
    return answer.join(" ")
  }

// Best Response

function splitAndMerge(str, sp) {
    return str.split(" ").map(word => word.split("").join(sp)).join(" ");
  }