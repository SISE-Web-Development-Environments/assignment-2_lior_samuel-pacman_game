
function startLoginCheck(){
    if( validetInfo()==0){  //////////////////////////////////////////////change to validetInfo()==1 if want to use validation
        showPreGameErea()
    }
    else{
        alert("invalid input, reEnter info");
        showLoginErea()
    }

    function showPreGameErea(){
        $(".startClass").hide();
        $(".preGameClass").show();
        $(".registerClass").hide();
        $(".loginClass").hide();
        $(".aboutClass").hide();
        $(".gameClass").hide();
    }
    function showLoginErea(){
        $(".startClass").hide();
        $(".preGameClass").hide();
        $(".registerClass").hide();
        $(".loginClass").show();
        $(".aboutClass").hide();
        $(".gameClass").hide();
    }

    function validetInfo(){
        let username = document.getElementById("loginUserName").value;
        let password = document.getElementById("loginPassword").value;
        var flag =0;
        if (null !== username && null !== password && users[username] === password){
            alert("Valid Password");
            flag=1;
        }
        else{
            alert("username or password is incorrect");
        }

        return flag;
    }//func validetInfo

}// startLoginCheck

