$(document).ready(function(){ 
    
    // Global variables
    var randomTarget = 0;
    var userScore = 0;
    var score = 0;
    var win = 0;
    var loss = 0;
    var score = 0;
    var crystalBlue, crystalPurple, crystalGarnet, crystalAmber = 0;

    // JQuery selector to start game when start button is clicked
    $("#start").click(startGame);
    function startGame(){
        randomTarget = 0;
        userScore = 0;    
    // Random number generated for Target   
        randomTarget = Math.floor(Math.random()*111)+19;
        $("#target").text(randomTarget);
    // Random number generated for each crystal 
        crystalBlue = Math.floor(Math.random()*11)+1;     
        crystalPurple = Math.floor(Math.random()*11)+1;
        crystalGarnet = Math.floor(Math.random()*11)+1;
        crystalAmber = Math.floor(Math.random()*11)+1;    
    // Checks to prevent generating matching numbers 
        if(crystalBlue===crystalPurple || crystalBlue===crystalGarnet || crystalBlue===crystalAmber){
          crystalBlue = Math.floor(Math.random()*11)+1;
        }
        if(crystalPurple===crystalGarnet || crystalPurple---crystalAmber){
          crystalPurple = Math.floor(Math.random()*11)+1;
        }
        if(crystalGarnet===crystalAmber){
          crystalGarnet = Math.floor(Math.random()*11)+1;
        }
    // Sets the text content for user's score    
        $("#u_score").text(userScore); 
    };  // Close startGame function  


    // After clicking the blue crystal, its random number is added to the Score
    $("#crystalBlue").on("click", function(){
        userScore = userScore + crystalBlue;
        $("#u_score").text(userScore);   
    // Score amount is compared to Target to check the state for win
        if(userScore === randomTarget){
          win++;
          $("#win").text(win);
          startGame();
        }
    // Score amount is compared to Target to check the state for loss    
        if(userScore > randomTarget){
          loss++;
          $("#loss").text(loss);
          startGame();
        }
    });
   // Check and Update the Purple Crystal
    $("#crystalPurple").on("click", function(){
      userScore = userScore + crystalPurple;
      $("#u_score").text(userScore);

      if(userScore === randomTarget){
        win++;
        $("#win").text(win);
        startGame();
      }

      if(userScore > randomTarget){
        loss++;
        $("#loss").text(loss);
        startGame();
      }
  });

  // Check and Update the Red Crystal
  $("#crystalGarnet").on("click", function(){
    userScore = userScore + crystalGarnet;
    $("#u_score").text(userScore); 
    
    if(userScore === randomTarget){
      win++;
      $("#win").text(win);
      startGame();
    }
    if(userScore > randomTarget){
      loss++;
      $("#loss").text(loss);
      startGame();
    }
});

//Check and Updte the Yellow Crystal
$("#crystalAmber").on("click", function(){
  userScore = userScore + crystalAmber;
  $("#u_score").text(userScore); 
  
  if(userScore === randomTarget){
    win++;
    $("#win").text(win);
    startGame();
  }
  if(userScore > randomTarget){
    loss++;
    $("#loss").text(loss);
    startGame();
  }
});

 });