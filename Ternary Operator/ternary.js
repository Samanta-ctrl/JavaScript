var firstName = 'Soumen';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

var drink = age >= 16 ? 'beer' : 'juice';
console.log(drink)

//this is same as 
/*
if(age >=18)
    {
        var drink = 'beer';
    }
else
    {
        var drink = 'juice';
    }
    
*/