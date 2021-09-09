var sum = 0;
for(var i = 1; i<=10; i++){
    var readlinesync = require("readline-sync")
    var user = readlinesync.questionInt("Enter Any Number :=")
    sum += user
}
console.log(sum)
// user input sum