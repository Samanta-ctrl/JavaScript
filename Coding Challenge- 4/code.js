var john = {
  fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function()
    {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
  fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function()
    {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if(john.bmi > mark.bmi)
    {
        console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
    }
else if(john.bmi < mark.bmi)
    {
        console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
    }
else
    {
        console.log('They have same BMI rate');
 
    }