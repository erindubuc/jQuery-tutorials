var myLis = $("#points-of-sale li");

myLis.on("click", function() {
    
    $(this).css({"background" : "pink"});
    
    myLis.off("click");
})


/*
on() binds an event to matched element(s)
off() unbinds an event from matched element(s)
*/