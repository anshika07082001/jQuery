$(document).ready(function(){
    $("#btn1").click(function(){
        $("#mainDiv").append("<div id='genDiv'><input placeholder='Enter Class' id='classInp'><input placeholder='Enter Board' id='BoardInp'><input placeholder='Enter Marks' id='marksInp'><input placeholder='Enter Divison' id='divisonInp'><button class='btn'>-</button></div>");
    });
    $("#btn2").click(function(){
        $("#formDiv").remove();
    });
    $("#mainDiv").on("click",".btn",(function(){
        $(this).parent().remove();
    }));
});