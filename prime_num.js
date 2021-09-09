var readlinesync = require("readline-sync");
var num = readlinesync.questionInt("ENTER ANY NUMBER:=");
let c = 0;

for ( var i = 1 ;  num>=i ; i++) {
    if (num % i ==0 ){
        c +=1
    }
}
if (c == 2){
    console.log("prime");
}
else{
    console.log("Not a prime");

}
// prime number for loop


var count = 0;
var index = 1;
do {
    if (num%index ==0){
        count+=1
    }
    index +=1
}

while (num>=index)
if (count ==2){
    console.log("Prime");
}
    else{
    console.log("Not Prime");
}
// prime number in do loop

var j = 1;
var c1 = 0;
while (j<=num){
    if (num%j == 0){
        c1 += 1
    }
    j ++;
}
if (c1 == 2){
    console.log("Prime Number")
}
else{
    console.log("NOT A PRIME")
}
// prime num in while loop
