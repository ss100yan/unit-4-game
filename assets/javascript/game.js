

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
$("#img1").css( 'cursor', 'pointer' ).click( function(){score=score+cristal1; 
    if( score == number ){wins++}else if(score > number) {losses++};
    $("#wins").html(wins);$("#losses").html(losses);$("#score").html(score);
    } );
$("#img2").css( 'cursor', 'pointer' ).click(function(){score=score+cristal2; 
     if( score == number ){wins++}else if(score > number) {losses++};
     $("#wins").html(wins);$("#losses").html(losses);$("#score").html(score);
      } );
$("#img3").css( 'cursor', 'pointer' ).click(function(){score=score+cristal3; 
    if( score == number ){wins++}else if(score > number) {losses++};
    $("#wins").html(wins);$("#losses").html(losses);$("#score").html(score);
     });
$("#img4").css( 'cursor', 'pointer' ).click(function(){score=score+cristal4;
    if( score == number ){wins++}else if(score > number) {losses++};
    $("#wins").html(wins);$("#losses").html(losses);$("#score").html(score);
     });
});