// set up array for computer to choose from
var alphabet =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z"];

// set up the computer to pick a random indexed value from aray
var randomIndex = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomIndex];

console.log(computerChoice);

// add a listener for the user to press a key
document.onkeyup = function(event) {
  var userChoice = event.key;
  // make sure the user selects a value a-z
  var regexp = /[a-z]/gi;
    if (!regexp.test(userChoice)) {
      alert("please enter a letter");
    }
    else {
      console.log(event.key);
    }
    // compares the randomly selected computer choice and user choice
    if (computerChoice === userChoice) {
      console.log("You win!");
    } else {
      console.log("You lose!");
    }
}
