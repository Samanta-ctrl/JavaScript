//for loop:-

for(var i=0; i <= 10; i++) {
        console.log(i);
}

//looping through the array
var apu = ['Soumen','Samanta', 1995, 'Developer',false];
for(var i=0; i< apu.length; i++){
    console.log(apu[i]);
}

//*****************************************************

//while loop:-

var i = 0;
while(i < apu.length){
    console.log(apu[i]);
    i++;
}

//*****************************************************

//continue and break statements:-
//continue is used to quit out from the current iteration of the loop and continue to the next iteration.

//break is used to break out of the loop

var apu = ['Soumen','Samanta', 1995, 'Developer',false];
for(var i=0; i< apu.length; i++){
    if(typeof apu[i] !== 'string') continue;
    console.log(apu[i]);
}

for(var i=0; i< apu.length; i++){
    if(typeof apu[i] !== 'string') break;
    console.log(apu[i]);
}


