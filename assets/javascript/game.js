

var number = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
var wins = 0;
var losses = 0;
var number2 = 0;
var score = 0;

var cristal1=Math.floor(Math.random() * 12 );
var cristal2=Math.floor(Math.random() * 12 );
var cristal3=Math.floor(Math.random() * 12 );
var cristal4=Math.floor(Math.random() * 12 );

$(document).ready(function(){
$("#number").html(number);
$("#wins").html(wins);
$("#losses").html(losses);
$("#score").html(score);
});