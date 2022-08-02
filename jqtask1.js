$(document).ready(function(){
    $("#cpwdInput").keyup(function(){
        var pwdInput = document.getElementById('pwdInput').value;
        var cpwdInput = document.getElementById('cpwdInput').value;
        if(pwdInput == cpwdInput)
        {
            document.getElementById('error').innerHTML = "";
        }
        else
        {
            document.getElementById('error').innerHTML = "not matched";
        }
    });
});