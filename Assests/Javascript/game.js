
var psychicChoices= ["a", "e","i","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var playerGuess= 0;
var wins = 0;
var losses = 0;
var guesses =  10;
var wrong = [];


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");
var wrongText = document.getElementById("wrong-text");

var psychicAns = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
var lettersGuessed = [];

document.addEventListener("keyup",function(event){

    var playerGuess = event.key;
   
    console.log(psychicAns);
    if (playerGuess === psychicAns){
        wins ++;
        guesses = 9;
        psychicAns = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
    } else {
        losses ++;
        guesses --;
        lettersGuessed.push(playerGuess);
        if(guesses === 0) {
            guesses = 10;
            alert('game over');
            psychicAns = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];

        }
    }
    if (losses === 5){
        win= 0;
    }

    winsText.textContent = "Wins:" + wins;
    lossesText.textContent = "Losses:" + losses;
    guessesText.textContent = "Guesses Left:" + guesses ;
    wrongText.textContent = "Your Guesses so far:"+  lettersGuessed ;
})