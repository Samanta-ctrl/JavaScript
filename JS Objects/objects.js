//Any real world entities are called Objects.

//Objects and its properties:-

var john = {
    firstName: 'John',
    lastname: 'Smith',
    birthYear: 1995,
    place: 'Kolkata',
    family: ['Mom','Dad','Sister'],
    job: 'Software Engineer',
    isMarried: false
};

console.log(john);

//Accessing property -1st way
console.log(john.family);
console.log(john.firstName);
console.log(john.birthYear);


//Accessing property -2nd way
console.log(john['lastname']);
var x = 'birthYear';
console.log(john[x]);


john.job = 'designer';
john['isMarried'] = true;
console.log(john);


//new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Smith';
jane.birthYear = 1994;
jane['job'] = 'Student';
 console.log(jane);

//*****************************************************************************************
//Objects and Methods:-

var John = {
    firstName: 'John',
    lastname: 'Smith',
    birthYear: 1992,
    place: 'Kolkata',
    family: ['Mom','Dad','Sister'],
    job: 'Software Engineer',
    isMarried: false,
    
   /* calculateAge: function(birthYear)  
    {
        return 2020 - birthYear; 
    }
    */
     //we can also do by using this keyword to use the current object values
    
        calculateAge: function()  
    {
        return 2020 - this.birthYear; 
    }
    
};

//console.log('Age is: '+John.calculateAge(1995));
console.log('Age is: '+John.calculateAge());


//********************************************************************************************


let mobiles ={
    brand: 'iphone',
    price: 79000,
    color: 'grey'
};

console.log(mobiles);
console.log(typeof mobiles);
console.log(mobiles.brand);
console.log(mobiles.camera);

//we can access properties by using [ ] notation also.
console.log(mobiles['price']);

let prop = 'brand';
console.log(mobiles.prop); //undefined
console.log(mobiles[prop]); //iphone --> used for dynamic properties


//**************************************************************************************

//CRUD operation:-
// 1. Create of object
let mobile ={};
console.log(mobile);
mobile.brand = 'Motorola';
mobile.price = 24999;
mobile.color = 'Sterling BLue';
mobile.ram = '6GB';
mobile.processor = 'Qualcom Snapdragon';

console.log(mobile);

//2 . Read 
console.log(mobile.processor);
console.log(mobile.ram);

//3. Update
mobile.price = 18999;
console.log(mobile.price);

//4. Delete
delete mobile.processor;
console.log(mobile);