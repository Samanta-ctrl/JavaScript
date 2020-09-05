/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, isGamePlaying;

/*scores = [0,0];
    activePlayer = 0;
    roundScore = 0;

// but we use these in future for repeating purpose we will use init() method to initialize the function    
    */


init(); //calling init() function ( which is implemented in the below)
 
//console.log(dice); //we will get random number

//DOM manipulation:- the object that will give us the access to the DOM is document object

// document.querySelector('#current-'+activePlayer).textContent = dice; //if we want to change the text in this element then we need textContent() where querySelector selects the particular element from our page.

//or we can do like this also

/* document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice + '</em>'; //em means emphasize text i.e.; italic text */
//but we prefer the first one

//getter value
//var x = document.querySelector('#score-1').textContent;
//console.log(x); 

document.querySelector('.dice').style.display = 'none'; // we want to change the display property of the middle dice to none 

//Now to setting default score for both the players as 0, we will use getElementByID(), which is faster than querySelector().

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(isGamePlaying)
    {    
            //1. Random number
            var dice = Math.floor(Math.random() * 6) + 1; //random() will gives us a randpm number b/w 0 and 1. but we need number b/w 1 and 6. so multiply by 6. but as these numbers are decimal so we have romove it by using floor(). now we are getting 0 to 5 number but we want from 1 to 6 so we added 1. That will be perfect.

            
            //2. Display the result
            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + dice + '.png'; // if we roll 1 then we need the dice-1 image

            //3. Update the round score if the rolled number was not equals to 1.
            if(dice !== 1){
                //add score
                roundScore += dice; //internal rolled values will be added 
                document.querySelector('#current-' + activePlayer).textContent = roundScore; //display the total to the user interface i.e; global value
            }
           else{
                //next player
                nextPlayer();
            }
    }
            
});


//holding the results
document.querySelector('.btn-hold').addEventListener('click', function() {
    if(isGamePlaying) //we can hold our point if the game is going on /playing or active
    {
        //add the current score to the global score
        scores[activePlayer] = scores[activePlayer] + roundScore; //scores[activePlayer] += roundScore;
    
        //update the UI ( what we hold )
        document.querySelector('#score-' +activePlayer).textContent = scores[activePlayer]; //for id = score-0 and score-1    
    
        //check if the player won the game if any player reach the global score of 100
        if(scores[activePlayer] >= 100)
        {
            document.querySelector('#name-'+ activePlayer).textContent = 'Winner!'; //if any player wins then showing as Winner with replace of its name.
            document.querySelector('.dice').style.display = 'none'; //after winning hide the dice and remove the active class from the current player.
            
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); //player who win the game gets winner
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); //remove the active player class
            
            //if any player wins a game then the state variabale value goes to false.
            isGamePlaying = false; //to avoid the continuity of the game 
        }
        else
        { //game is ended
            //next player   
            nextPlayer(); 
        }        
    }
});


//create a function for the next player (DRY principle(Dont repeat yourself)) to do not repeat the code
function nextPlayer()
    {
        
        //next player
                activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //using ternary operator
                roundScore = 0; //to set the roundscore back to 0 
                
                //and also we have do loose the total score in the interface also.
                document.getElementById('current-0').textContent = '0'; //player-current-score class 
                document.getElementById('current-1').textContent = '0'; //player-current-score class 
                
    //in JS we can add,remove and toggle class to style our applications like below..
                //document.querySelector('.player-0-panel').classList.remove('active'); //remove active class
                //document.querySelector('.player-1-panel').classList.add('active'); //add active class
                
                //we can better option by using toggle
                    
                //toggle does is that it adds the class(active) if it is not there and if the class is already there then removes this.
                document.querySelector('.player-0-panel').classList.toggle('active'); //by default player-0-panel class is active in html
                document.querySelector('.player-1-panel').classList.toggle('active');
                
                //when a player gets 1 then hide the dice
                document.querySelector('.dice').style.display = 'none'; //using CSS properties
                
    } 
    
//for new game  (class name btn-new)
//first if we have a button and an events then of course we have to listen to that event. for that we have to use eventListener

/*
document.querySelector('btn-new').addEventListener('click',function(){ //on click it will listen
    //first we have to reset our player scores
     // but here we dont need annonymous funtion as it calls another function , but here we can directly pass the init(). below it writes-
    
});*/

document.querySelector('.btn-new').addEventListener('click',init); //just passing the method not calling and call


function init() //to initialize the function  and calls it many times as per our need
{
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0; //which player is playing now. 0 means player-1 and 1 means player-2
    
    //state variable
    isGamePlaying = true; // whenever init() calls then the game will run always until gets false value

    document.querySelector('.dice').style.display = 'none'; // we want to change the display property of the middle dice to none 

    //Now to setting default score for both the players as 0, we will use getElementByID(), which is faster than querySelector().
    
    //initialize both the players internal value and global value as 0 before starting the Game
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    //for setting default player name (By default)
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
//After ending first round of game, when we click New Game     
    
    //first thing we have to remove the Winner class after playing one round game and set to default player name (and its values as 0 we call init() )
    
    //for Winning player we have to remove the winner class as we dont know which player will win so we do for both winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    //same for active player also we have to remove the active class as we dont know which player will win so we do for both active class
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    //now we have to set the first player as default active player as usual by adding active class
    document.querySelector('.player-0-panel').classList.add('active');
    
}
