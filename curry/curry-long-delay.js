// var delay = function (firstArg) {
//     this.acum = 0;
//     if (firstArg) { this.acum += firstArg };

//     return function (secArg) {
//         return (acum + (secArg || 0));
//     }
// };
// a = delay(5)
// b = a(8)
// console.log(b)

var total = 0;
var longDelay = function (a) {
  if (a === undefined) {
    var result = total;
    total = null;
    return result;
  } else {
    total = total + a;
    return longDelay;
  }
};

console.log(longDelay())
console.log(longDelay(10))
console.log(longDelay(3))
console.log(longDelay())

module.exports = longDelay;