var DurationOfGame ;
var numberOfMonsters ;
var numberOfBalls ;

var rightB;
var leftB;
var upB;
var downB;
//////////////////////////////////////////////////////////////////////////////////////////////////////////section 1
function chooseDefaultControl() {
    showGameErea();
    submitInfoWithDefault()
}
function chooseCustomControl() {
    $(".startClass").hide();
    $(".preGameClass2").show();
    $(".preGameClass1").hide();
    $(".registerClass").hide();
    $(".loginClass").hide();
    $(".aboutClass").hide();
    $(".gameClass").hide();
    $(".keyControlClass").hide();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////section 2
function gameControlChooseR(){
    window.onkeyup = function (event) {
        rightB = event.key.toUpperCase();
    }
}
function gameControlChooseL(){
    window.onkeyup = function (event) {
        leftB = event.key.toUpperCase();
    }
}
function gameControlChooseD(){
    window.onkeyup = function (event) {
        downB = event.key.toUpperCase();
    }
}
function gameControlChooseU(){
    window.onkeyup = function (event) {
        upB = event.key.toUpperCase();
    }
}
function startGameSubmit(){
    showGameErea()
    submitInfo();
}
function startGamePreChechData(){
    DurationOfGame=0 ;
    numberOfMonsters=0 ;
    numberOfBalls=0 ;
    if( validetInfo()==1 ){
        DurationOfGame = document.getElementById("gameDuration").value;
        numberOfMonsters = document.getElementById("numberOfMonsters").value;
        numberOfBalls = document.getElementById("numberOfBalls").value;
        showkeyControlSection();
    }
    else{
        alert("invalid input, reEnter info");
    }
}
//////////////////////////////////////////////////////////////////////
function showkeyControlSection(){
    $(".startClass").hide();
    $(".preGameClass2").hide();
    $(".preGameClass1").hide();
    $(".registerClass").hide();
    $(".loginClass").hide();
    $(".aboutClass").hide();
    $(".gameClass").hide();
    $(".keyControlClass").show();
}
function showGameErea(){
    $(".startClass").hide();
    $(".preGameClass2").hide();
    $(".preGameClass1").hide();
    $(".registerClass").hide();
    $(".loginClass").hide();
    $(".aboutClass").hide();
    $(".gameClass").show();
    $(".keyControlClass").hide();
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
    newGameFromControl(gameStartInfo());
}

function gameStartInfo() {
    const DurationOfGameInput = DurationOfGame;
    const numberOfMonstersInput = numberOfMonsters;
    const numberOfBallsInput = numberOfBalls;
    const rightBo = rightB;
    const leftBo = leftB;
    const upBo = upB;
    const downBo = downB;
    alert("keys: "+ rightBo +" "+leftBo  +" " +downBo +" " +upBo);
    return {numberOfBallsInput, DurationOfGameInput, numberOfMonstersInput, rightBo, leftBo, upBo, downBo};
}
//////////////////////////////////////////
function submitInfoWithDefault() {
    newGameFromControl(gameStartInfoWithDefault());
}

function gameStartInfoWithDefault() {
    let randDefaultOption = Math.floor(Math.random()*100);
    let DurationOfGameInput ;
    let numberOfMonstersInput ;
    let numberOfBallsInput ;
    if(randDefaultOption>60){
        DurationOfGameInput = 60;
        numberOfMonstersInput = 1;
        numberOfBallsInput = 60;

    }
    else if(randDefaultOption>30 && randDefaultOption<60) {
        DurationOfGameInput = 70;
        numberOfMonstersInput = 2;
        numberOfBallsInput = 70;
    }
    else{
        DurationOfGameInput = 80;
        numberOfMonstersInput = 3;
        numberOfBallsInput = 80;
    }
    const DurationOfGameInputF = DurationOfGameInput;
    const numberOfMonstersInputF = numberOfMonstersInput;
    const numberOfBallsInputF = numberOfBallsInput;
    const rightBoF = 39;
    const leftBoF = 37;
    const upBoF = 38;
    const downBoF = 40;
    alert("keys: "+ rightBoF +" "+leftBoF  +" " +downBoF +" " +upBoF);
    alert("settings : "+ DurationOfGameInputF +" "+numberOfMonstersInputF  +" " +numberOfBallsInputF);
    return {numberOfBallsInputF, DurationOfGameInputF, numberOfMonstersInputF, rightBoF, leftBoF, upBoF, downBoF};
}