function tipCalculateBill(bill)
{
    var percentage;
    if(bill < 50)
        percentage = 0.20;
    
    else if(bill > 50 && bill <200)
        percentage = 0.15;
    
    else
        percentage = 0.10;
    return percentage * bill;
}

console.log('Tip is: '+tipCalculateBill(124));
console.log('Tip is: '+tipCalculateBill(48));
console.log('Tip is: '+tipCalculateBill(268));

var bills = [124,48,268];
var tips = [tipCalculateBill(bills[0]),
           tipCalculateBill(bills[1]),
           tipCalculateBill(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];
console.log(tips,finalValues);
