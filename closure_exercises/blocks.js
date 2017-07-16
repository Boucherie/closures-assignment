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
