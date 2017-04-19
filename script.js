/* global $ */
$(document).ready(function(){
  function rolldice(){
    
$("#roll-dice").click(function() {

$('.dice').empty();

var num = Math.floor(Math.random()*6);
    if(num == 0){
        console.log('1');
        $('#first-die').append('<img src="images/1.png"/>');
    }
    else if(num == 1){
        console.log('2');
        $('#first-die').append('<img src="images/2.png"/>');
    }
    else if(num == 2){
        console.log('3');
        $('#first-die').append('<img src="images/3.png"/>');
    }
    else if(num == 3){
        console.log('4');
        $('#first-die').append('<img src="images/4.png"/>');
    }
    else if(num == 4){
        console.log('5');
        $('#first-die').append('<img src="images/5.png"/>');
    }
    else if(num == 5){
        console.log('6');
        $('#first-die').append('<img src="images/6.png"/>');
    }
    
    
    
var num2=Math.floor(Math.random()*6);
    
    
    if(num2 == 0){
        console.log('1');
        $('#second-die').append('<img src="images/1.png"/>');
    }
    else if(num2 == 1){
        console.log('2');
        $('#second-die').append('<img src="images/2.png"/>');
    }
    else if(num2 == 2){
        console.log('3');
        $('#second-die').append('<img src="images/3.png"/>');
    }
    else if(num2 == 3){
        console.log('4');
        $('#second-die').append('<img src="images/4.png"/>');
    }
    else if(num2 == 4){
        console.log('5');
        $('#second-die').append('<img src="images/5.png"/>');
    }
    else if(num2 == 5){
        console.log('6');
        $('#second-die').append('<img src="images/6.png"/>');
    }
    
    
  

        });
    }
    rolldice();
});