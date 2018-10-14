$(document).ready(function(){

    // jQuery methods go here...with test
     console.log("Hello World");   

    
    // Global variables
    var randomTarget = 0;
    
    function randomizeTarget () { 
        
         

      $(".targetBtn").click(function() {  
      randomTarget = Math.floor(Math.random()*111)+19;
      $(".targetBtn").html("TARGET: " + randomTarget);    
      
    }); 
     
 
 });