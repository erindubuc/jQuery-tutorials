$(document).ready(function() {
   
   $("*").on("click", function(e){
    //   do something
        console.log(e.target);
        console.log("The event type is: " + e.type);
        // x and y are useful if you're working on a game where you'd want to know where the player clicked for an event to happen
        console.log("X co-ordinate of the event is: " + e.pageX);
         console.log("Y co-ordinate of the event is: " + e.pageY);
       e.stopPropagation();
   });


});