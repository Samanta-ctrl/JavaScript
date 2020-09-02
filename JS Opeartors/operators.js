//Basic Operators:-

/*
var year, yearSoumen,yearArindam;
currentYear = 2020;
ageSoumen = 25;
ageArindam = 24;
yearSoumen = currentYear-25;
yearArindam = currentYear-24;

console.log(yearSoumen);
console.log(yearArindam + 2);

//Logical Operator
var soumenOlder = ageSoumen < ageArindam;
console.log(soumenOlder); //boolean flase


//typeof operator
console.log(typeof soumenOlder); //type of the datatype is boolean here
console.log(typeof ageSoumen); //number

var x;
console.log(typeof x); //undefined

console.log(typeof "My name is Soumen"); //string


*/


//******************************************************************
//Operator Precedence:-

var now = 2020;
var yearSoumen = 1995;
var fullAge = 18;

//Multiple operators:-
var isFullAge = now - yearSoumen >= fullAge;
console.log(isFullAge); //true

//Grouping:-
var ageSoumen = now - yearSoumen;
var ageMark = 35;
var average = ageSoumen + ageMark / 2;
console.log(average);

//Multiple Assignments:-
var x,y,z;
x = (3+5) * 4 - 6; // 8 * 4 - 6 = 32 - 6 = 26
x = y = (3+5) * 4 - 6;
console.log(x);
console.log(x, y);

//More operators
x = x+2; // --> x+=2;
console.log(x);

x*=2; //x = x*2;
console.log(x);

x=x+1; //--> x++
console.log(x);

