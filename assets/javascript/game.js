
        //variables for keeping score
        var wins = 0;
        var losses = 0;
        var guessesleft = 10;
        var yourguesses = [];


        //variables for letter generator
        var emptyString = "";
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        //while loop to randomly choose a letter
        while (emptyString.length < 1) {
        emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        console.log(emptyString);


         //this allows user to type guesses
        document.onkeyup = function() {
        var userguess = String.fromCharCode(event.keyCode).  
            toLowerCase();

        console.log(userguess);

        //this logs the users guesses by putting them in an array.
        yourguesses.push(userguess );
    

        //this checks the users guess against the letter
        if (userguess === emptyString){
          wins++; guessesleft = 10; yourguesses = [];
        alert("Congradulations! " + emptyString + " was the correct letter!");
        } else {
          guessesleft--;
        } 


        if (yourguesses.length === 10){
            losses++; guessesleft = 10; yourguesses = [];
        }
    
    
         //this displays the correct and incorrect guesses
        var html = "<p><h1>The Psychic Game</h1></p>" + 
        "<p>Guess what letter I'm thinking of</p>" + 
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesleft + "</p>" +
        "<p>Your Guesses: " + yourguesses + " </p>";

        document.querySelector('#game').innerHTML = html;
        
    }

