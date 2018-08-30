$(document).ready(function() {
   function complete() {
       alert("Animation complete");
   }
   $("section > h2").on("click", function(){
    // fadeOut() fades out and completely disappears from page 
  $(this).fadeTo(200, 0.2) 
         .fadeTo(200, 0.8)
         .fadeTo(200, 0.2) 
         .fadeTo(200, 0.8)
         .fadeTo(200, 0.2) 
         .fadeTo(200, 0.8);

   
   });
});