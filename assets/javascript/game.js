$( document ).ready(function(){
//Global Variables
//=============================================================
let crystalsToCollect = 0;
let wins = 0;
let losses = 0;
let ruby = 0;
let diamond = 0;
let topaz = 0;
let emerald= 0;
let yourScore = 0;

function reset() {
  //Generate a random number as the number of crystals to collect
  crystalsToCollect = Math.floor((Math.random() * 120) + 19);
  //Test
  console.log(crystalsToCollect);
  //Display the amount of crystals you need
  $('#crystalCount').html(crystalsToCollect);
 
  //Random amounts for each crystal
  ruby = Math.floor((Math.random() * 12) + 1);
  diamond = Math.floor((Math.random() * 12) + 1);
  topaz = Math.floor((Math.random() * 12) + 1);
  emerald = Math.floor((Math.random() * 12) + 1);
  //Test
  console.log(ruby, diamond, topaz, emerald);
  //Reset your total
  yourScore = 0;
  $('#score').html(yourScore);
  console.log("Your score: " + yourScore); 

  startGame();
}

function winLose() {
  //Win/Loss conditions
  if (yourScore === crystalsToCollect) {
    //You won!
    alert("You've figured out blues clues!...because you're really smart.");
    wins++;
    $('#wins').html("Wins: " + wins);
    reset();
  } 
  else if (yourScore > crystalsToCollect) {
    //You lost!
    alert("Better luck next time you bum");
    losses++;
    $('#losses').html("Losses: " + losses);
    reset();
  }
  
}//End of winLose function

// function winner(){
//   alert("You won!");
//     wins++; 
//     $('#wins').text(wins);
//     reset();
//   }
//   //addes the losses to the userTotal
//   function loser(){
//   alert ("You lose!");
//     losses++;
//     $('#losses').text(losses);
//     reset()
//   }

//START GAME
//===========================================================================================
function startGame() {
    //Gets the users "click" on each crystal and add correct points
    $("#ruby").on("click", function() {
      yourScore = yourScore + ruby;
      $('#score').html(yourScore); 
      //Test
      console.log("You clicked ruby!");
      console.log("Add " + ruby);
      console.log("Your score: " + yourScore);
      winLose(); 
    });
    
    $("#diamond").on("click", function() {
      yourScore = yourScore + diamond;
      $('#score').html(yourScore); 
      //Test
      console.log("You clicked diamond!");
      console.log("Add " + diamond);
      console.log("Your score: " + yourScore);
      winLose();     
    });
    
    $("#topaz").on("click", function() {
      yourScore = yourScore + topaz;
      $('#score').html(yourScore);
      //Test
      console.log("You clicked topaz!");
      console.log("Add " + topaz);
      console.log("Your score: " + yourScore);
      winLose();   
    });
    
    $("#emerald").on("click", function() {
      yourScore = yourScore + emerald;
      $('#score').html(yourScore); 
      //Test
      console.log("You clicked emerald!");
      console.log("Add " + emerald);
      console.log("Your score: " + yourScore);
      console.log(crystalsToCollect);
      winLose();    
    });

  }//End of function startGame

//Starts the game
reset(); 

});

