// Lecture: Hoisting:-

// 1. function hoisting:-

function calculateAge(year)
{
    console.log(2020- year);
}
// we can declare it before use and can also use before then declare. This concept is known as hoisting in function.
calculateAge(1995);

//------------------------------------------------------------------------------------------------------------------------------

//retirement(1999); // here it will not work becuase in hoisting, this function is not a funtion declaration, it is a function expresion and hoisting  with function will only works in function declarations.
var retirement = function(year)
{
    console.log(65 - (2016 - year));
}
retirement(1999); //here it will work 

//************************************************************************************************************************************

// 2. variable hoisting:-

console.log(age); //we are trying here to use this variable before we declare in our code. and it will give undefined
var age = 23;
console.log(age); //but it will give the output as 23


function foo()
{
    console.log(age); //undefined
    var age = 65;
    console.log(age); // own execution context object
}
foo();
console.log(age); // global execution context object



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Scoping


// First scoping example

var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

// Output:- Hello!Hi!Hey!


// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();
    
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    //console.log(c); // error, as c is not defined
    console.log(a + d); //Hello!John
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

calculateAge(1995);

function calculateAge(year)
{
    console.log(2020- year);
    console.log(this); //always points to window object
}

var john = {
    name: 'John',
    yearOfBirth: 1999,
    calcAge: function(){
        console.log(this); //john objects
        console.log(2020 - this.yearOfBirth); //21
        
        function innerFunction() 
        {
            console.log(this); // // it is pointing to the window object. not in john object
        }
        innerFunction();
    }
};
john.calcAge();

//--------------------------------------------------

var mike = {
    name: 'Mike',
    yearOfBirth: 1984  
};

//Method borrowing 
mike.calcAge = john.calcAge;
mike.calcAge();

//so this keyword is only becomes when something as soon as the method calls.