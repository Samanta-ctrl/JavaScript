var massMark =78; //in kg
var heightMark = 1.73; //in meters

var massJohn = 93;
var heightJohn = 1.95;

var BMI_Mark = massMark / (heightMark * heightMark);
var BMI_John = massJohn / (heightJohn * heightJohn);
console.log('Marks\'s BMI rate is: '+BMI_Mark); console.log('John\'s BMI rate is: '+BMI_John);

var  markHigherBMI = BMI_Mark > BMI_John;
console.log('Is Mark\'s BMI higher than John\'s ?' +markHigherBMI);