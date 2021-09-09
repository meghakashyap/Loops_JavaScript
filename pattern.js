var row = 5
while (row>=1){
   var column=1
   str=""
   while(column<=5){
       str=str+row+" ";
       column+=1;
   }
   console.log(str);
   row-=1;
}

