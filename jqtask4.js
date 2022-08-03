$(document).ready(function(){
    $("#btnSubmit").click(function(){
        var inp1 = document.getElementById("inpName").value;
        var inp2 = document.getElementById("inpName1").value;
        if(inp1 == "" || inp2 == "")
        {
            alert("Blank fields");
        }
        else{
            return;
        }
        if(inp1 == "")
        {
            $("#inpName").css("background-color", "red");
        }
        if(inp2 =="")
        {
            $("#inpName1").css("background-color", "red"); 
        }
        else{
            return;
        }
    })
})