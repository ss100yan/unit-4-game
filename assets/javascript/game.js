


var wins = 0;
var losses = 0;
var number2 = 0;
var score = 0;
var number = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
var cristal1=Math.floor(Math.random() * 12 );
var cristal2=Math.floor(Math.random() * 12 );
var cristal3=Math.floor(Math.random() * 12 );
var cristal4=Math.floor(Math.random() * 12 );

$(document).ready(function(){
 $("#number").html(number);
   $("#wins").html(wins);
    $("#losses").html(losses);
     $("#score").html(score);

$("#img1").css( 'cursor', 'pointer' ).click(function(){score=score+cristal1; play();});
   $("#img2").css( 'cursor', 'pointer' ).click(function(){score=score+cristal2; play();});
     $("#img3").css( 'cursor', 'pointer' ).click(function(){score=score+cristal3; play();});
       $("#img4").css( 'cursor', 'pointer' ).click(function(){score=score+cristal4; play();});
        var play= function(){
         if( score == number ){wins++; score=0; reset();}else if(score > number) {losses++; score=0; reset();};
          $("#wins").html(wins);$("#losses").html(losses);$("#score").html(score);
             };
              var reset = function(){
                number = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
                 cristal1=Math.floor(Math.random() * 12 );
                   cristal2=Math.floor(Math.random() * 12 );
                    cristal3=Math.floor(Math.random() * 12 );
                      cristal4=Math.floor(Math.random() * 12 );
                        $("#number").html(number);
             };
});
