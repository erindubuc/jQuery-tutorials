// set-up for chaining
// don't overdo it with too many changes in the chain

$("#contact-methods").css({border: "2px solid red"})
    .next().css({border: "2px solid green"})
    .closest("section").css({border: "2px solid blue"});