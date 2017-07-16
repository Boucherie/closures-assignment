// Exercise 2
function buildHouse(address) {
  // ... house gets built
  return 'Building house at ' + address;
}
var streetNumber = buildHouse('123 Happy St.');

console.log(streetNumber);

// prediction:
// address not defined, address in buildHouse is a placeholder
// result: ReferenceError: address is not defined
// altered to work (streetNumber)
var smoothie = 'strawberry banana';
var determined = false;
if (determined) {

}
console.log(smoothie);

// prediction: smoothie declared inside function, not accessible outside; schrodinger's smoothie

//moved smoothie above function declaration

// function callExample(){
//   for (var index = 0; index < 5; index++) {
//     // ...
//   }
// }
// console.log(index);

// index on same level; move for loop iside a function to remove console access (works!)

var items = ['glasses', 'toothpaste', 'wallet'];
items.forEach(function(item) {
  var lastItem = item;
  console.log(lastItem);
});

// move console.log(lastItem) inside function, working now (called 'beside')
