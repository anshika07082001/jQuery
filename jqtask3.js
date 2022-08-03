$(document).ready(function(){
    $("#btnEven").click(function(){
        $("tr:even").css("background-color","DodgerBlue");
    });
    $("#btnOdd").click(function(){
        $("tr:odd").css("background-color","lightgrey");
    });
});