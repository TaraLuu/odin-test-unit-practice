//part 1
function capF(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

//part 2
function revF(s) {
  return s.split('').reverse().join('')
}

//part 3
function addF(a, b) {return a + b}
function subsF(a, b) {return a - b}
function divF(a, b) {return a / b}
function multF(a, b) {return a * b}

//part 4
function ccF(s) {
  let alpha = [...Array(26)].map((_, i) => String.fromCharCode(i + 97))
  let sArr = s.toLowerCase().split("")
  let fArr = []
  for (let i = 0; i < sArr.length; i++) {
  fArr.push(alpha[alpha.indexOf(sArr[i])+1])
  }
  return fArr.join('')
}

//part 5
function analyzeArray(arr) {
  const myOb= {
    average: myAvg(arr),
    min: myMin(arr),
    max: myMax(arr),
    length: arr.length,
  }
  function myAvg(ar) {return ar.reduce((a, b) => a + b)/arr.length}
  function myMin(ar) {return Math.min(...ar)}
  function myMax(ar) {return Math.max(...ar)}
  return myOb
}

module.exports = {capF, revF, addF, subsF, divF, multF, ccF, analyzeArray}