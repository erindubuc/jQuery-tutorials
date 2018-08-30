$(document).ready(function() {
   function complete() {
       alert("Animation complete");
   }
   $("img[alt=map]").on("click", function(){
   
        $("section > h2").toggle(1000);
            // toggle fades element in or out, depending on its current state
            // shows/hides too
            // NOT the same as toggle class which changes the class of an element!!!!
   
   });
});