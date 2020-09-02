var firstName = 'Soumen';
var civilStatus = 'single';

if (civilStatus === 'married')
{
    console.log(firstName + ' is married!');     
}
else
{
    console.log(firstName + ' will hopefully marry soon..');
}

//*********************************************************************

var isMarried = true;
if (isMarried)
{
    console.log(firstName + ' is married!');     
}
else
{
    console.log(firstName + ' will hopefully marry soon..');
}


//**********************************************************************

var massMark =78; //in kg
var heightMark = 1.73; //in meters

var massJohn = 93;
var heightJohn = 1.95;

var BMI_Mark = massMark / (heightMark * heightMark);
var BMI_John = massJohn / (heightJohn * heightJohn);

if(BMI_Mark > BMI_John)
    {
        console.log('Mark\'s BMI is higher than John\'s.');
    }
else
    {
        console.log('John\'s BMI is higher than Mark\'s.');
    }
