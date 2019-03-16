var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
document.onkeyup = function (event) {

    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]; // computer selects random letter
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //takes a guess from a user
    guessesSoFar.push(userGuess);
    if (userGuess === computerGuess) {
        wins++;
        alert('You guesesed it. You Won!');
        guessesLeft = 9; 
        guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
    }
    else if (guessesLeft == 0) {
        losses++;
        alert('You lost. Try again.');
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }

    else if (userGuess !== computerGuess) {
        guessesLeft--;
    }
    var html = "<h1>The Psychic Game</h1>" +
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" + 
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your Guesses so far: " + guessesSoFar + "</p>";

    document.querySelector('#game').innerHTML = html;


}