function newGame() {
    alert("New game has started. Good luck!");
    startTheGame();
}

function restartGame() {
    alert("game restarted, New game has started. Good luck!");
    startTheGame();
}

function startTheGame() {
    var canvas = document.getElementById("canvasBord");
    if(canvas.getContext){
        var contex = canvas.getContext("2d");
        contex.fillStyle = "#000000";
        contex.fillRect(10, 10, 500, 500)
        contex.fillStyle = "#ffffff";
        contex.fillRect(25, 25, 470, 470)
    }



}