
// ##Functional Scope
// ##Exercise 1

var lastWord = 'welcome';
console.log(lastWord);
lastWord = 'goodbye';

// console.log output - 'welcome' => came before log


var message = "Up here!";

function shout() {
  console.log(message);
}

shout();

// "Up here!" = message defined above function

var message = "Up here!";

function shout(message) {
  console.log(message);
}

shout("Down below!")

// message used as a placeholder for input inside the function; the following would have worked:
        // var message = "Up here!";
        //
        // function shout(report) {
        //   console.log(report);
        // }
        //
        // shout(message)


var muffins = 'two dozen';
var purchasedMuffins;

function getMuffins() {
  return muffins;
}
purchasedMuffins = getMuffins();
console.log(purchasedMuffins);

// purchasedMuffins calls in getMuffins function prior to logging;
// getMuffins function returns the muffins variable, while calls in the string 'two dozen'


var chore = 'laundry';

function doChores() {
  var chore = 'sneak out';

  function reportActivity() {
    console.log(chore);
  }

  reportActivity();
}

doChores(); // calling doChores(), which then calls reportActivity()

// doChores defined inside function being called, 'sneak out' is logged


var letter;
var contents = 'Looking for gold';

function getMail() {

  function changeContents() {
    var contents = 'Struck it rich!';
  }

  changeContents();
  return contents;
}

letter = getMail();
console.log(letter);
// looking for gold is called; getMail cannot gain access to function variables nested inside it, defaults 'up'

var decision;

function firstIdea() {
  var decision = 'Buy a new car';
  return decision;
}

function secondIdea() {
  console.log(decision);
}

firstIdea();
secondIdea();
// firstIdea defined inside function, but does not call an argument; secondIdea was called from outside and was never actually defined there, therefore returns undefined
