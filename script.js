 //The Psychic game was used with mostly javascript and very limited HTML. 
 //There are other was to impliment this Psychic Nightmare game to make it more neat and efficient, however, the game still runs smoothly.

 alert ("Welcome to Psychic Nightmare!")

// Below are the computer choices. Any key press other than A-Z is omitted.

    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Below are the variables to keep track of user's wins/lose/guess/lettersguess

    var wins = 0;
    var guesses = 10;
    var loses = 0;
    var lettersguess = []

// Below is the randomized computer guesses

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
    console.log (computerGuess)


// Below is the keypress function and letterguess to log it down.

    document.onkeyup = function(event) {
      var userGuess = event.key;
      lettersguess.push(userGuess)


//below are the possibilities of what would happen if the user press a key (lowercase) A-Z.

        if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f")
        || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "l") || (userGuess === "m")
        || (userGuess === "n") || (userGuess === "o") || (userGuess === "p")  || (userGuess === "q") || (userGuess === "r") || (userGuess === "s")
        || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y")
        || (userGuess === "z")) {

//below are the win conditions are how it resets it
        if (userGuess === computerGuess) {
          alert ("niceee, you got it right");
          wins++;
          guesses = 10;
          computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
          console.log (computerGuess);
          lettersguess = []

        }

//below are the minus in guess if the user guess the wrong letter.
            else if (userGuess != computerGuess) {
                guesses--;
               
            }
        }

//below are the lose conditions if the user uses up all their guess how it resets it. 

        if (guesses < 0) {
          alert ("Whoa, you done goof. you used up all your attemps.");
          guesses = 10;
          loses++;
          alert ("you get more spam because you failed");
          alert ("do you like losing, because you just did");
          alert ("It's ok, you can try again!");
          computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
          console.log (computerGuess);
          lettersguess = []
        }


// the var html that is going to be inserted into the HTML.
        var html =
          "<h1> Psychic Game </h1>" +
          "<h2> Can you guess the letter the computer is thinking of?? >:) </h2>" +
          "<p>You chose: " + userGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>loses: " + loses + "</p>" +
          "<p>guesses: " + guesses + "</p>" +
          "<p>letters guess: " + lettersguess + "</p>"

// HTMl insert into HTMl using the game div

        document.querySelector("#game").innerHTML = html;
      }
