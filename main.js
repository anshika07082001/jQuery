$(document).ready(function(){
    const arr = [{SKU:101,Name:"Product 101",Price:"150",Quantity:50,Action:""},{SKU:102,Name:"Product 102",Price:"100",Quantity:20,Action:""}];
    function populate()
    {
        $text ="";
        for(i=0;i<arr.length;i++)
        {
        $text += "<tr><td>"+arr[i].SKU+"</td><td>"+arr[i].Name+"</td><td>"+arr[i].Price+"</td><td>"+arr[i].Quantity+"</td><td><a href='#' class='edit'>Edit</a><a href='#' class='delete'>Delete</a></td></tr>";
        }
        $("#tblShow").html($text);
    }
    populate();
    $("#add_product").click(function(){
        $erroRFlag=0;
        $Btnval = $("#add_product").val();
        $regNum = /^[0-9]+$/;
        if($Btnval=="Add Product")
        {
            $inp1 = $("#product_sku").val();
            $inp2 = $("#product_name").val();
            $inp3 = $("#product_price").val();
            $inp4 = $("#product_quantity").val();
            if($inp1=="")
            {
                $erroRFlag=1;
                $("#err").html("Sku should not be empty");
                $("#product_sku").addClass("errorTextBox");
                $(".success").hide();
                $(".error").html("Error");
            }
            else
            {
                if(!$inp1.match($regNum)){
                    $erroRFlag=1;
                    $("#err").html("Sku should be an Integer");
                    $("#product_sku").addClass("errorTextBox");
                }
                else{
                    $("#product_sku").removeClass("errorTextBox");
                }
            }
            if($inp2=="")
            {
                $erroRFlag=1;
                $("#product_name").addClass("errorTextBox");
                $("#err1").html("Name should not be empty");
                $(".success").hide();
                $(".error").html("Error");
            }
            else{
                if(!$inp2.match(/[a-z]/)){
                    $erroRFlag=1;
                    $("#err1").html("Name should be an String");
                    $("#product_name").addClass("errorTextBox");
                }
                else{
                    $("#product_name").removeClass("errorTextBox");
                }
            }
            if($inp3=="")
            {
                $erroRFlag=1;
                $("#err2").html("Price should not be empty");
                $("#product_price").addClass("errorTextBox");
                $(".success").hide();
                $(".error").html("Error");
            } 
            else{
                if(!$inp3.match($regNum)){
                    $erroRFlag=1;
                    $("#err2").html("Price should be an Integer");
                    $("#product_price").addClass("errorTextBox");
                }
                else{
                    $("#product_price").removeClass("errorTextBox");
                }
            }
            if($inp4=="")
            {
                $erroRFlag=1;
                $("#product_quantity").addClass("errorTextBox");
                $("#err3").html("Quantity should not be empty");
                $(".success").hide();
                $(".error").html("Error");
            }
            else{
                if(!$inp4.match($regNum)){
                    $erroRFlag=1;
                    $("#err3").html("Quantity should be an Integer");
                    $("#product_quantity").addClass("errorTextBox");
                }
                else{
                    $("#product_quantity").removeClass("errorTextBox");
                }
            }
            if($erroRFlag==0)
            {
                $objArr = {SKU:$inp1,Name:$inp2,Price:$inp3,Quantity:$inp4};
                arr.push($objArr);
                populate();
                $(".error").hide();  
                $(".success").show().html("Product Added Successfully");
            }
        }       
    });
    $upd=-1;
    $("#tblShow").on("click",".edit",(function(){
        $upd = $(this).parent().parent().index();
        $("#product_sku").val(arr[$upd].SKU);
        $("#product_name").val(arr[$upd].Name);
        $("#product_price").val(arr[$upd].Price);
        $("#product_quantity").val(arr[$upd].Quantity);
        $("#add_product").val("Update");
    }));
    $("#add_product").click(function(){
        if($Btnval=="Update")
        {
        arr[$upd].SKU=$("#product_sku").val();
        arr[$upd].Name=$("#product_name").val();
        arr[$upd].Price=$("#product_price").val();
        arr[$upd].Quantity=$("#product_quantity").val();
        $("#add_product").val("Add Product");
        populate();
        $(".success").html("Successfully Updated");
        $(".error").hide();
        }
    })
    $("#tblShow").on("click",".delete",(function(){
        $value = confirm("Are you sure you want to delete");
        if($value==true)
        {
            $(this).closest("tr").remove();
            $(".error").hide();
            $(".success").html("Successfully Deleted");
        }
        else
        {
            return;
        }
    }));
//blur
    $("#product_sku , #product_name , #product_price , #product_quantity").blur(function(){
        $inp1 = $("#product_sku").val();
        $inp2 = $("#product_name").val();
        $inp3 = $("#product_price").val();
        $inp4 = $("#product_quantity").val();
        $regNum = /^[0-9]+$/;
        if($inp1=="")
        {
            $erroRFlag=1;
            $("#err").html("Sku should not be empty");
            $("#product_sku").addClass("errorTextBox");
            $(".success").hide();
            $(".error").html("Error");
        }
        else
        {
            if(!$inp1.match($regNum)){
                $erroRFlag=1;
                $("#err").html("Sku should be an Integer");
                $("#product_sku").addClass("errorTextBox");
            }
            else{
                $("#product_sku").removeClass("errorTextBox");
                $("#err").html("");   
                $(".error").hide();

            }
        }
        if($inp2=="")
            {
                $erroRFlag=1;
                $("#product_name").addClass("errorTextBox");
                $("#err1").html("Name should not be empty");
                $(".success").hide();
                $(".error").html("Error");
            }
            else{
                if(!$inp2.match(/[a-z]/)){
                    $erroRFlag=1;
                    $("#err1").html("Name should be an String");
                    $("#product_name").addClass("errorTextBox");
                }
                else{
                    $("#product_name").removeClass("errorTextBox");
                    $("#err1").html("");
                    $(".error").hide();

                }
            }
            if($inp3=="")
            {
                $erroRFlag=1;
                $("#err2").html("Price should not be empty");
                $("#product_price").addClass("errorTextBox");
                $(".success").hide();
                $(".error").html("Error");
            } 
            else{
                if(!$inp3.match($regNum)){
                    $erroRFlag=1;
                    $("#err2").html("Price should be an Integer");
                    $("#product_price").addClass("errorTextBox");
                }
                else{
                    $("#product_price").removeClass("errorTextBox");
                    $("#err2").html("");
                    $(".error").hide();
                }
            }
            if($inp4=="")
            {
                $erroRFlag=1;
                $("#product_quantity").addClass("errorTextBox");
                $("#err3").html("Quantity should not be empty");
                $(".success").hide();
                $(".error").html("Error");
            }
            else{
                if(!$inp4.match($regNum)){
                    $erroRFlag=1;
                    $("#err3").html("Quantity should be an Integer");
                    $("#product_quantity").addClass("errorTextBox");
                }
                else{
                    $("#product_quantity").removeClass("errorTextBox");
                    $("#err3").html("");
                    $(".error").hide();
                }
            }
    })

});