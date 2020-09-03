//Initialize new array
var names = ['Soumen','Arindam','Mark','James'];
var years = new Array(1990,1963,1995,1998); //calling array function using new keyword

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

console.log(names);

console.log(names.length); //array length

//Mutate array data
names[1] = 'Ben'; //changing array elements using index value
names[3] = 'Poltu';
console.log(names);

//*****************************************************************

//different data types and methods of arrays:-

var john = ['John', 'Smith', 1995, 'designer',false];

john.push('blue') //add the elements in the last position of the array
console.log(john);

john.unshift('Mr.'); //add one or more elements in the begining of the array
console.log(john);


john.pop(); //removes the elements from the end
console.log(john);

john.shift(); // remove first element
console.log(john);

console.log(john.indexOf(1995)); //returns the position
//if the given element is not present in the index then it it return -1.

var isDesigner = john.indexOf('designer') == -1 ? 'John is NOT a designer' : 'John is a Designer';
console.log(isDesigner);
