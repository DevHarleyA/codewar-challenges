/*
You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];
your function should return true as there is at least one developer from the required 5 geographic zones.

Notes:

The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.
*/

// My Solution
function allContinents(list) {
    // declare empty country object
    let continent = {'Africa': 0, 'Asia': 0, 'Americas': 0, 'Europe': 0, 'Oceania': 0}
    // iterate through the array to check if all five continents are represented
    for (let i = 0; i < list.length; i++) {
      if (continent.hasOwnProperty(list[i].continent)) {
        continent[list[i].continent]++
      }
    }
    console.log(continent)
    // 'Africa', 'Asia', 'Americas', 'Europe', & 'Oceania'
    for (let place in continent) {
      if (continent[place] <= 0) {
        return false
      }
    }
    
    return true
    
  }

// Best Solution
function allContinents(list) {
    return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(x => list.some(y => x==y.continent));
  }