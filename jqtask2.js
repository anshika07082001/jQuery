$(document).ready(function(){
    $("#btn1").click(function(){
        $("#mainDiv").append("<div><input placeholder='Enter Class' id='classInp'><input placeholder='Enter Board' id='BoardInp'><input placeholder='Enter Marks' id='marksInp'><input placeholder='Enter Divison' id='divisonInp'><button id='btn11'>+</button><button id='btn'>-</button></div>");
    });
    $("#btn2").click(function(){
        $("#formDiv").remove();
    });
    $("#mainDiv").on("click","#btn",(function(){
        $(this).parent().remove();
    }));
    $("#mainDiv").on("click","#btn11",(function(){
        $(this).parent().append("<div><input placeholder='Enter Class' id='classInp'><input placeholder='Enter Board' id='BoardInp'><input placeholder='Enter Marks' id='marksInp'><input placeholder='Enter Divison' id='divisonInp'><button id='btn11'>+</button><button id='btn'>-</button></div>")
    }))
});