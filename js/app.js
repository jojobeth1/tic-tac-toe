// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
    var turnCount=0;
    $('#board').find('#1').on('click', function(){
          if (turnCount % 2 === 0){
            $(this).text('X');

          } else {
         //player 2's turn (O)
            $(this).text('O');

          }
        turnCount++;

    });

    $('#board').find('#2').on('click', function(){
          if (turnCount % 2 === 0){
            $(this).text('X');

          } else {
         //player 2's turn (O)
            $(this).text('O');

          }
        turnCount++;

    });

    $('#board').find('#3').on('click', function(){
          if (turnCount % 2 === 0){
            $(this).text('X');

          } else {
         //player 2's turn (O)
            $(this).text('O');

          }
        turnCount++;

    });


  });
