/*

*/

// My Solution
function getFirstPython(list) {
    for (let i = 0; i < list.length; i++) {
    if (list[i].language === 'Python') {
      return `${list[i].firstName}, ${list[i].country}`
    }
  }
  return 'There will be no Python developers'
}

// Best Solution
function getFirstPython(list) {
    const dev = list.find(x => x.language === "Python")
    return dev ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers"
  }