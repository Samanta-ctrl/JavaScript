//ceating john objects and its properties
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function()
    {
        this.tips = []; // current tips for 5 bills 
        this.finalValues = []; // current total bill
        
        for(var i = 0; i < this.bills.length; i++)
        {
            //determine percentage based on tipping rules
            var percentage;
            
            if(this.bills[i] < 50)
            {
                percentage = 0.20;
            }
            else if(this.bills[i] >= 50 && this.bills[i] < 200){
                percentage = 0.15;
            }
            else
            {
                percentage = 0.10;
            }
            
            //Add results to the corresponding arrays
            this.tips[i] = this.bills[i] * percentage; //tip calculate
            this.finalValues[i] = this.bills[i] + this.tips[i]; 
            
        }
    }
}

john.calcTips();
console.log(john);

//*************************************************************

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 375, 110, 45],
    calcTips: function()
    {
        this.tips = []; // current tips for 5 bills 
        this.finalValues = []; // current total bill
        
        for(var i = 0; i < this.bills.length; i++)
        {
            //determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if(bill < 100)
            {
                percentage = 0.20;
            }
            else if(bill >= 100 && bill < 300){
                percentage = 0.10;
            }
            else
            {
                percentage = 0.25;
            }
            
            //Add results to the corresponding arrays
            this.tips[i] = bill * percentage; //tip calculate
            this.finalValues[i] = bill + this.tips[i]; 
            
        }
    }
}

function calcAvg(tips)
{
    var sum = 0;
    for(var i = 0; i < tips.length; i++)
        {
            sum = sum + tips[i];
        }
    return sum / tips.length; //avg
}

mark.calcTips();
console.log(mark);


//Average calculate using method:-
john.average = calcAvg(john.tips);
mark.average = calcAvg(mark.tips);
console.log(john,mark);

//comparison

if(john.average > mark.average)
    {
        console.log(john.fullName + '\'s family pays higher tips, with an avg of $'+john.average);
    }
else{
    console.log(mark.fullName + '\'s family pays higher tips, with an avg of $'+mark.average);
}
