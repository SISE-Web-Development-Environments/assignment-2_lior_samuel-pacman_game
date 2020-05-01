
function startGamePreChechData(){
    if( validetInfo()==1 ){
        showGameErea()
        submitInfo();
    }
    else{
        alert("invalid input, reEnter info");
    }
    function showGameErea(){
        $(".startClass").hide();
        $(".preGameClass").hide();
        $(".registerClass").hide();
        $(".loginClass").hide();
        $(".aboutClass").hide();
        $(".gameClass").show();
    }

    function validetInfo(){
        var flag =1;
        var Duration = document.getElementById("gameDuration").value;
        var Monsters = document.getElementById("numberOfMonsters").value;
        var Balls = document.getElementById("numberOfBalls").value;

        if(Duration<60){
            alert("Duration game too short, 60 or higher");
            flag=0;
        }
        if(Monsters<1 || Monsters>4){
            alert("number of Monsters is invalid must be between 1-4");
            flag=0;
        }
        if(Balls<50 || Balls>90){
            alert("number of Balls is invalid must be between 50-90");
            flag=0;
        }
        return flag;
    }//func

    function submitInfo() {
        newGame(gameStartInfo());
    }

    function gameStartInfo() {
        const DurationOfGame = document.getElementById("gameDuration").value;
        const numberOfMonsters = document.getElementById("numberOfMonsters").value;
        const numberOfBalls = document.getElementById("numberOfBalls").value;
        return {numberOfBalls, DurationOfGame, numberOfMonsters};
    }
}