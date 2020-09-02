var firstName = 'Soumen';

var job = 'Driver';

switch(job)
    {
        case 'Teacher':
            console.log(firstName + ' teaches kids how to code');
            break;
        
        case 'Driver':
            console.log(firstName + ' Drives an uber in kolkata');
            break;
            
        case 'Designer':
            console.log(firstName + ' Designes beautiful websites');
            break;
            
        default:
            console.log(firstName + ' does something else..')
            
    }


var age = 25;
switch(true)
    {
        case age < 13:
            console.log(firstName + ' is a boy');
            break;
            
        case age >= 13 && age < 20:
            console.log(firstName + ' is a teenager');
            break;
            
        case age >= 20 && age < 30:
            console.log(firstName + ' is a young man.');
            break;
        
        default:
            console.log(firstName + ' is a man');
    }