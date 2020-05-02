
function startRegisterinCheck(){
    if( validetInfo()==1 ){
        showLoginErea()
    }
    else{
        alert("invalid input, reEnter info");
        showRegisterErea()
    }

    function showLoginErea(){
        $(".startClass").hide();
        $(".preGameClass").hide()
        $(".registerClass").hide();
        $(".loginClass").show();
        $(".aboutClass").hide();
        $(".gameClass").hide();
        $(".keyControlClass").hide();
    }
    function showRegisterErea(){
        $(".startClass").hide();
        $(".preGameClass").hide()
        $(".registerClass").show();
        $(".loginClass").hide();
        $(".aboutClass").hide();
        $(".gameClass").hide();
        $(".keyControlClass").hide();
    }

    function validetInfo(){
        let username = $("#registerUserName").val();
        let password = $("#registerPassword").val();
        let firstName = $("#registerFirstName").val();
        let lastName = $("#registerLastName").val();
        let email = $("#registerEmail").val();
        let birthday = $("#registerBirthDat").val();
        let flag =0;

        if (username === "" || password === "" || firstName === "" || lastName === "" || email === "" || birthday === "") {
            alert("You didn't insert one of the fields");
            flag=0;
        }
        else if (username in users) {
            alert("This username is already exists");
            flag=0;
        }
        else {
            users[username] = password;
            flag=1;
        }

        return flag;
    }//func validetInfo

}// startLoginCheck
