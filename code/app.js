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
var curentKeyPress;
var curentdirection;
/////////////////////////////////////////////////////////////////////////////////////////////

function startTheGame(gameStartInfo) {
	var canvas = document.getElementById("canvas");
	if(canvas.getContext){
		var contex1 = canvas.getContext("2d");
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
	rightBut = thisCurGameData.rightBo ;
	leftBut = thisCurGameData.leftBo ;
	downBut = thisCurGameData.downBo ;
	upBut = thisCurGameData.upBo;
	//alert("contol keys check:  right: " +rightBut+ "  left: " +leftBut+  "  up: " + upBut+ "  down: "+downBut);
	alert("keys: "+ rightBut +" "+leftBut  +" " +downBut +" " +upBut);
	alert("settings : "+ durationTime +" "+MonstersNumber  +" " +BallsNumber);
	rightBut = parseInt(rightBut );
	leftBut = parseInt( leftBut );
	downBut = parseInt( downBut );
	upBut = parseInt( upBut);
	//alert("contol keys check:  right: "+rightBut+"  typOf: " +typeof(rightBut) );
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
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////create the walls
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
			//curentKeyPress = parseInt( e.keyCode);/////////
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
			//curentKeyPress = parseInt( e.keyCode);/////////
		},
		false
	);


	// addEventListener(
	// 	"keydown",
	// 	function(e) {
	// 		curentKeyPress= parseFloat(e.keyCode);
	// 	},
	// 	false
	// );
	// addEventListener(
	// 	"keyup",
	// 	function(e) {
	// 		curentKeyPress= parseFloat(e.keyCode);
	// 	},
	// 	false
	// );
	curentdirection=1;

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

	// var rightBut;
	// var leftBut;
	// var downBut;
	// var upBut;

	// if ( curentKeyPress == upBut) {//up
	// 	return 1;
	// }
	// if (curentKeyPress == downBut) {//down
	// 	return 2;
	// }
	// if (curentKeyPress == leftBut) {//left
	// 	return 3;
	// }
	// if (curentKeyPress == rightBut) {//right
	// 	return 4;
	// }
	// else{
	// 	alert("---curentKeyPress: "+ curentKeyPress +"  upBut: "+upBut);
	// }

	// if (keysDown[upBut]) {//up
	// 	return 1;
	// }
	// if (keysDown[downBut]) {//down
	// 	return 2;
	// }
	// if (keysDown[leftBut]) {//left
	// 	return 3;
	// }
	// if (keysDown[rightBut]) {//right
	// 	return 4;
	// }

	if (keysDown[38]) {//up
		curentdirection=1;//
		return 1;
	}
	if (keysDown[40]) {//down
		curentdirection=2;//
		return 2;
	}
	if (keysDown[37]) {//left
		curentdirection=3;//
		return 3;
	}
	if (keysDown[39]) {//right
		curentdirection=4;//
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
	lblScore.value = score;      // the score display
	lblTime.value = time_elapsed;// the time display
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			var center = new Object();
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			if (board[i][j] == 2) {
				if(curentdirection==4){//right
					///////////////////////////pacman body
					context.beginPath();
					context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
					context.lineTo(center.x, center.y);
					context.fillStyle = pac_color; //color
					context.fill();
					//////////////////////////pacman eye
					context.beginPath();
					context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
					context.fillStyle = "black"; //color
					context.fill();
				}
				else if(curentdirection==3){//left
					///////////////////////////pacman body
					context.beginPath();
					context.arc(center.x, center.y, 30, 1.15 * Math.PI, 2.85 * Math.PI); // half circle
					context.lineTo(center.x, center.y);
					context.fillStyle = pac_color; //color
					context.fill();
					//////////////////////////pacman eye
					context.beginPath();
					context.arc(center.x - 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
					context.fillStyle = "black"; //color
					context.fill();
				}
				else if(curentdirection==1){//up
					///////////////////////////pacman body
					context.beginPath();
					context.arc(center.x, center.y, 30, 1.6 * Math.PI, 3.3 * Math.PI); // half circle
					context.lineTo(center.x, center.y);
					context.fillStyle = pac_color; //color
					context.fill();
					//////////////////////////pacman eye
					context.beginPath();
					context.arc(center.x - 15, center.y -7, 5, 0, 2 * Math.PI); // circle
					context.fillStyle = "black"; //color
					context.fill();
				}
				else if(curentdirection==2){//down
					///////////////////////////pacman body
					context.beginPath();
					context.arc(center.x, center.y, 30, 0.60 * Math.PI, 2.35 * Math.PI); // half circle
					context.lineTo(center.x, center.y);
					context.fillStyle = pac_color; //color
					context.fill();
					//////////////////////////pacman eye
					context.beginPath();
					context.arc(center.x - 15, center.y + 7, 5, 0, 2 * Math.PI); // circle
					context.fillStyle = "black"; //color
					context.fill();
				}

			} else if (board[i][j] == 1) {//food
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 4) {//walls
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; //color
				context.fill();
			}
		}
	}
}





/////////////////////////////////////////////////////////////////////////////////////////////////game restart and new game control
function newGameFromControl(gameStartInfo) {
	startTheGame(gameStartInfo);
}

function restartGame(gameStartInfo) {
	alert("game restarted, New game has started. Good luck!");
	newGame();
}

function restartGame() {
	alert("game restarted, New game has started. Good luck!");
	let gameStartInfo=thisCurGameData;
	newGame(gameStartInfo);
}
function endGame() {
	if (lives == 0) alert("You Lost!");
	if (timeLeft == 0 && score < 150) alert("You can do better");
	else if (timeLeft == 0 && score > 150) alert("We have a winner");
	let gameStartInfo=thisCurGameData;
	newGame(gameStartInfo);
}

function newGame(gameStartInfo) {
	stopGame();
	context= undefined;
	shape = new Object();
	board= undefined;
	score= undefined;
	pac_color= undefined;
	start_time= undefined;
	time_elapsed= undefined;
	interval= undefined;
/////////////////////////////////my vars
	thisCurGameData= undefined;
	MonstersNumber= undefined;
	BallsNumber= undefined;
	durationTime= undefined;
////////////////////////////////// control keys
	rightBut= undefined;
	leftBut= undefined;
	downBut= undefined;
	upBut= undefined;
	curentKeyPress= undefined;
	curentdirection= undefined;
	startTheGame(gameStartInfo);
}

function playAudio() {
	//music.play();
}

function pauseAudio() {
	//music.pause();
}

function stopGame() {
	clearInterval(interval);
	// clearInterval(monster1Interval);
	// if (numberOfMonsters >= 2) {
	// 	clearInterval(monster2Interval);
	// }
	// if (numberOfMonsters >= 3) {
	// 	clearInterval(monster3Interval);
	// }
	// clearInterval(catchMeInterval);
	// clearInterval(timeInterval);
	// pauseAudio();
}

function newGameFromTheGame() {
	stopGame();
	context= undefined;
	shape = new Object();
	board= undefined;
	score= undefined;
	pac_color= undefined;
	start_time= undefined;
	time_elapsed= undefined;
	interval= undefined;
/////////////////////////////////my vars
	thisCurGameData= undefined;
	MonstersNumber= undefined;
	BallsNumber= undefined;
	durationTime= undefined;
////////////////////////////////// control keys
	rightBut= undefined;
	leftBut= undefined;
	downBut= undefined;
	upBut= undefined;
	curentKeyPress= undefined;
	curentdirection= undefined;
	showPreGameArea();
}
function showPreGameArea() {
	$(".startClass").hide();
	$(".preGameClass1").show();
	$(".preGameClass2").hide();
	$(".registerClass").hide();
	$(".loginClass").hide();
	$(".aboutClass").hide();
	$(".gameClass").hide();
	$(".keyControlClass").hide();
}

/////////////////: