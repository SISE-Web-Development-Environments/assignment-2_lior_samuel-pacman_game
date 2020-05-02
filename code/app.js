var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
/////////////////////////////////my vars
var thisCurGameData;
var MonstersNumber;
var BallsNumber;
var durationTime;
////////////////////////////////// control keys
var rightBut;
var leftBut;
var downBut;
var upBut;

/////////////////////////////////////////////////////////////////////////////////////////////
function newGame(gameStartInfo) {
	startTheGame(gameStartInfo);
}

function restartGame(gameStartInfo) {
	alert("game restarted, New game has started. Good luck!");
	startTheGame(gameStartInfo);
}

function startTheGame(gameStartInfo) {
	var canvas = document.getElementById("canvas");
	if(canvas.getContext){
		var contex1 = canvas.getContext("2d");
		//contex1.fillStyle = "#ffffff";
		//contex1.fillRect(0, 0, 600, 600)
		context = contex1;
		Start(gameStartInfo);
	}

}
////////////////////////////////////////////////////////////////////////////////////////////

function Start(gameStartInfo) {
	alert("New game has started. Good luck!");
	thisCurGameData = gameStartInfo;

	BallsNumber = thisCurGameData.numberOfBallsInput;
	MonstersNumber = thisCurGameData.numberOfMonstersInput;
	durationTime = thisCurGameData.DurationOfGameInput;
	rightBut = thisCurGameData.rightBo;
	leftBut = thisCurGameData.leftBo;
	downBut = thisCurGameData.downBo;
	upBut = thisCurGameData.upBo;
	alert("contol keys check:  right: " +rightBut+ "  left: " +leftBut+  "  up: " + upBut+ "  down: "+downBut);

	//alert("chet info- balls num:" + BallsNumber);
	//alert("chet info- monster num:" + MonstersNumber);
	//alert("chet info- duration time:" + durationTime);

	board = new Array();
	score = 0;
	pac_color = "yellow";
	var cnt = 100;
	var food_remain = BallsNumber; //var food_remain = 50;
	var pacman_remain = 1;
	start_time = new Date();
	var wallRandom = Math.floor(Math.random()*100);
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////
	if(wallRandom % 2 == 0){
		alert("+");
	}
	else{
		alert("-");
	}
	for( var i = 0; i < 10; i++ ){
		board[i] = new Array();
		for(var j = 0; j < 10; j++){
			if (wallRandom % 2 == 0) { ///////wall option 1
				if ( (i == 3 && j == 3) || (i == 3 && j == 4) || (i == 3 && j == 5) || (i == 3 && j == 6)||
					(i == 6 && j == 1) || (i == 6 && j == 2) || (i == 6 && j == 3)|| (i == 6 && j == 4) ||
					(i == 2 && j == 8) || (i == 3 && j == 8) || (i == 4 && j == 8)|| (i == 5 && j == 8) ){
					board[i][j] = 4;
				}
			}
			else {///////////////////////walls option 2
				if (  (i == 2 && j == 3) || (i == 2 && j == 4) || (i == 2 && j == 5) || (i == 2 && j == 6)||
					(i == 4 && j == 2) || (i == 5 && j == 2) || (i == 6 && j == 2)|| (i == 7 && j == 2) ||
					(i == 4 && j == 8) || (i == 5 && j == 8) || (i == 6 && j == 8)|| (i == 7 && j == 8) ){
					board[i][j] = 4;
				}
			}
		}
	}
	///////////////////////////////////////////////////////////////////
	for( var i = 0; i < 10; i++ ){
		for(var j = 0; j < 10; j++){
			if( board[i][j]==4 ){
				//do nothing there is a wall
			}
			else{
				var randomNum = Math.random();
				if (randomNum <= (1.0 * food_remain) / cnt) {
					food_remain--;
					board[i][j] = 1;
				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
					shape.i = i;
					shape.j = j;
					pacman_remain--;
					board[i][j] = 2;
				} else {
					board[i][j] = 0;
				}
				cnt--;
			}
		}
	}
	while (food_remain > 0) {////////////////////////////////////////////////////// fill board with food
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 1;
		food_remain--;
	}
	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 250);///////////////////change time by user choice
}

function findRandomEmptyCell(board) {///////////////////////////////// find empty cell...to put food in
	var i = Math.floor(Math.random() * 9 + 1);
	var j = Math.floor(Math.random() * 9 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 9 + 1);
		j = Math.floor(Math.random() * 9 + 1);
	}
	return [i, j];
}

function GetKeyPressed() {////////////////////////find out where the player want to move, witch bottom pushed
	                      ////////////// need to change for user choice
	if (keysDown[38]) {
		return 1;
	}
	if (keysDown[40]) {
		return 2;
	}
	if (keysDown[37]) {
		return 3;
	}
	if (keysDown[39]) {
		return 4;
	}
}



function UpdatePosition() {
	board[shape.i][shape.j] = 0;
	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.j--;
		}
	}
	if (x == 2) {
		if (shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
			shape.j++;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			shape.i--;
		}
	}
	if (x == 4) {
		if (shape.i < 9 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
		}
	}
	if (board[shape.i][shape.j] == 1) {
		score++;
	}
	board[shape.i][shape.j] = 2;
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	if (score >= 20 && time_elapsed <= 10) {
		pac_color = "green";
	}
	if (score == 50) {
		window.clearInterval(interval);
		window.alert("Game completed");
	} else {
		Draw();
	}
}

function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			var center = new Object();
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			if (board[i][j] == 2) {
				context.beginPath();
				context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 1) {
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; //color
				context.fill();
			}
		}
	}
}