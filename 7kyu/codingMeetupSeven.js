/*
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

For example, given the following input array:

var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
your function should return the following array:

[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
Notes:

The input array will always be valid and formatted as in the example above and will never be empty.


*/

// My Solution
function findSenior(list) {
    //declare answer array
    let answer = []
    // set highest age to start at 0
    let oldest = 0
    // iterate through each property, compare highest age to the age properties in each object
    for (let i = 0; i < list.length; i++) {
      if (list[i].age > oldest) {
        oldest = list[i].age
      }
    }
    console.log(oldest)
    
    list.filter((dev) => {
      if (dev.age === oldest) {
        answer.push(dev)
      }
    }) 
    
    // if age is greater than oldest, reassign the variable
    // push objects equal to that age to an answer array
    // return an array with the oldest person (full object)
    return answer
  }

// Best Solution
function findSenior(list) {
    var maxAge = Math.max(...list.map(person => person.age));
    return list.filter(person => person.age === maxAge);
  }