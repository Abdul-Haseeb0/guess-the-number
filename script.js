var msg1 = document.getElementById('para1');
var msg2 = document.getElementById('para2');
var msg3 = document.getElementById('para3');

var answer = Math.floor(Math.random()*100)+1;
console.log(answer);
var guessNumOf = 0;
var guessedNumbersAre = [];


function play() {
    var userGuess = document.getElementById('input').value;
    console.log(userGuess);
    if(userGuess < 1 || userGuess > 100){
        alert("enter the valid number between 1-100")
    }
    else{
        guessedNumbersAre.push(userGuess);
        guessNumOf += 1;

        if(userGuess < answer && answer - userGuess > 5){
            msg1.textContent = "Your guess num is too low";
            msg2.textContent = "NO of guesses : " + guessNumOf;
            msg3.textContent = "Guessed Numbers are : " + guessedNumbersAre;
        }
        else if(answer - userGuess >= 1 && answer - userGuess <= 5){
            msg1.textContent = "Your guess num is low";
            msg2.textContent = "NO of guesses : " + guessNumOf;
            msg3.textContent = "Guessed Numbers are : " + guessedNumbersAre;
        }
        else if(userGuess > answer && userGuess - answer > 5){
            msg1.textContent = "Your guess num is too high";
            msg2.textContent = "NO of guesses : " + guessNumOf;
            msg3.textContent = "Guessed Numbers are : " + guessedNumbersAre;
        }
        else if(userGuess - answer <= 5 && userGuess - answer >= 1){
            msg1.textContent = "Your guess num is high";
            msg2.textContent = "NO of guesses : " + guessNumOf;
            msg3.textContent = "Guessed Numbers are : " + guessedNumbersAre;
        }
        else if(userGuess == answer){
            msg1.textContent = "Congrats Your Answer Is Correct";
            msg2.textContent = "NO of guesses : " + guessNumOf;
            msg3.textContent = "Guessed Numbers are : " + guessedNumbersAre;
            setTimeout(function() {
                location.reload();
            }, 5000);
        };
        
    };
};

