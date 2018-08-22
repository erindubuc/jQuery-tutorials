// binding
// $("#lead-banner").click(function() {
    // alert("you double clicked me");
// });

// unbinding 
$("#lead-banner").dblclick(function() {
    alert("you double clicked me");
    $("#lead-banner").off("dblclick");
});

/*
on() binds an event to matched element(s)
off() unbinds an event from matched element(s)
*/