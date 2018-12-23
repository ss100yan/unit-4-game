

var number = Math.floor(Math.random() * 120 ) ;
var wins = 0;
var losses = 0;
var number2 = 0;
var score = 0;


// var Text = document.getElementById("number")
// Text.innerHTML("number");

$(document).ready(function(){
$("#number").html(number);
$("#wins").html(wins);
$("#losses").html(losses);
$("#number2").html(number2);
$("#score").html(score);
});