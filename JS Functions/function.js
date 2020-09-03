function calculateAge(birthYear)
{
    return 2020-birthYear;
}

var ageSoumen = calculateAge(1995);
console.log(ageSoumen);

var ageApu = calculateAge(1994);
console.log(ageApu);

var ageArindam = calculateAge(1996);
console.log(ageArindam);

console.log(ageApu,ageArindam,ageSoumen);

//*******************************************************************

//function calls to the other functions
function yearsUntilRetirement(year,firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if(retirement > 0)
        {
            console.log(firstName + ' retires in '+ retirement + ' years.');        
        }
    else
        {
            console.log(firstName + ' is already retires');
        }
}

yearsUntilRetirement(1995,'Soumen');
yearsUntilRetirement(1950,'Soumalya');
yearsUntilRetirement(1996,'Shuvendu');

//******************************************************************

//Function statements and expressions:-

    //function declaration
//function whatDoYouDo(job,firstName) {}

    //function expression
var whatDoYouDo = function(job,firstName) 
{
    switch(job)
        {
            case 'teacher':
                return firstName + ' teaches kids how to code';
                
            case 'driver':
                return firstName + ' drives a cab in Kolkata';
                
            case 'designer':
                return firstName + ' designes beautiful website';
                
            default:
                return firstName + ' does something else';
        }
}
console.log(whatDoYouDo('teacher','Soumen'));
console.log(whatDoYouDo('driver','Arindam'));
console.log(whatDoYouDo('student','Soumalya'));