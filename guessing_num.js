var readlinesync = require("readline-sync");
var name = readlinesync.question("Enter Your Name :=")
console.log("Hello", name,"\nWelcome in guessing game");
var chance= readlinesync.questionInt("How many times you want to guess :=");
var guess = Math.floor(Math.random()*10);


for (var i = 1; i<=chance ; i++){
    var num = readlinesync.questionInt("Enter your guess :=");
    if (num == guess){
        console.log("Right guess congracts!");
    }
    else if (num > guess){
        console.log("Go Slow");
    }
    else if (num < guess){
        console.log("Go high");
    }
    else if (i == chance){
        console.log("Sadly you reach the guess limit :(");
    }

}
// guessing game