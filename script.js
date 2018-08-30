
/*global $*/
$(document).ready(function() {
  
    var items = $("#points-of-sale li");
    
    items.on("click", function() {
        // want to bind click functions to li items
        $(this).find("p").slideToggle(500);
    });
});