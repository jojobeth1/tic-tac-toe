// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var ticTacToe = function () {
//Players
    var xPlayer = X;
    var oPlayer = O;
    //Player x goes first
    CurrentPlayer: X;
    /**
		Switch between X player and O player.
		*/
		this.swapCurrentPlayer = function() {
			if(CurrentPlayer == xPlayer) {
				CurrentPlayer = oPlayer;
			}
			$("#messageToPlayers").text("Player "+CurrentPlayer+"'is up.");
		}
  // Winning patterns
		waysToWin = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];

  };

});
