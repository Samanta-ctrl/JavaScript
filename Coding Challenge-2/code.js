
var avgScoreJohnTeam = (89+120+103)/3;
console.log('Average score of John team is: '+avgScoreJohnTeam);

var avgScoreMikeTeam = (116+94+123)/3;
console.log('Average score of Mike team is: '+avgScoreMikeTeam);

if(avgScoreJohnTeam > avgScoreMikeTeam)
    {
        console.log('John is the winner with the score of '+avgScoreJohnTeam);
    }
else if(avgScoreJohnTeam < avgScoreMikeTeam)
    {
        console.log('Mike is the winner with the score of '+avgScoreMikeTeam);
    }
else
    {
        console.log('Draw!!');
    }


//**********************************************************************

var avgScoreMarryTeam = (97 + 134 + 105) /3;
console.log('Average score of Marry team is: '+avgScoreMarryTeam);

if(avgScoreJohnTeam > avgScoreMikeTeam && avgScoreJohnTeam > avgScoreMarryTeam)
    {
         console.log('John is the winner with the score of '+avgScoreJohnTeam);
    }
else if(avgScoreMarryTeam > avgScoreJohnTeam && avgScoreMarryTeam > avgScoreMikeTeam)
    {
         console.log('Marry is the winner with the score of '+avgScoreMarryTeam);
   
    }
else if(avgScoreMikeTeam > avgScoreJohnTeam && avgScoreMikeTeam > avgScoreMarryTeam)
    {
         console.log('Mike is the winner with the score of '+avgScoreMikeTeam);
   
    }
else
    console.log('Draw!!');