var readlinesync = require("readline-sync")
var name = readlinesync.question("ENTER YOUR NAME := ") ;
var store = name ;
var empty = "" ;
for (var i =  store.length-1 ; i>=0 ; i--){
    empty+=store[i]
}
if (empty == name ){
    console.log("Palindrome");
}
else{
    console.log("Not palindrome")
}

// palindrome or not