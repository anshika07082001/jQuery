$(document).ready(function(){
    var products = [{"id": "100","name": "iPhone 4S","brand": "Apple","os": "iOS","remove":""},
    {"id": "101","name": "Moto X","brand": "Motorola","os": "Android","remove":""},
    {"id": "102","name": "iPhone 6","brand": "Apple","os": "iOS","remove":""},
    {"id": "103","name": "Samsung Galaxy S","brand": "Samsung","os": "Android","remove":""},
    {"id": "104","name": "Google Nexus","brand": "ASUS","os": "Android","remove":""},
    {"id": "105","name": "Surface","brand": "Microsoft","os": "Windows","remove":""}];
    // table populate function
    function populate(){
        $text = "";
        $text = "<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";
        for(i=0;i<products.length;i++){
            $text += "<tr><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td><td><a>X</a></td></tr>";
        }
        $("#tblShow").html($text);
    }
    populate();
    // removes row //
    $("table").on("click","a",function(){
        $(this).closest("tr").remove();  
        if($("#tblShow").children().length==1)
        {
         $("#tblShow").hide();
        }
        else{
         $("#tblShow").show();
        }
    })
    // Filter By Operating System
    $("#selectFilterOp").change(function(){
        $("#tblShow").html("");
        $opArr = [];
        $sel = $("#selectFilterOp :selected").text();
        for(i=0;i<products.length;i++){
            if($sel == products[i].os){
                $opArr.push(products[i]);                            
            }
        }
        filterPopulateOp($opArr);
        if($("#tblShow").children().length==1)
        {
         $("#tblShow").hide();
        }
        else{
         $("#tblShow").show();
        }
    })
    // Filter By Brand
    $("#selectFilterBrand").change(function(){
        $brandArr = [];
        $sel = $("#selectFilterBrand :selected").text();
        for(i=0;i<products.length;i++){
            if($sel == products[i].brand){
                $brandArr.push(products[i]);                            
            }
        }
        filterPopulateOp($brandArr);
        if($("#tblShow").children().length==1)
        {
         $("#tblShow").hide();
        }
        else{
         $("#tblShow").show();
        }
    })
    //Filter populate function table
    function filterPopulateOp($args1){
        $("#tblShow").html("");
        $text = "";
        $text = "<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th></tr>";
        for(i=0;i<$args1.length;i++){
            $text += "<tr><td>"+$args1[i].id+"</td><td>"+$args1[i].name+"</td><td>"+$args1[i].brand+"</td><td>"+$args1[i].os+"</td></tr>";
        }
        $("#tblShow").html($text);
    }
    // search by id and name
    $("#divSearch").on("click","#btnSearch",function(){
        $("#searchTable").html("");
        $inp = $("#inpText").val().toLowerCase();
        $text = "<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th></tr>";
        for(i=0;i<products.length;i++){
            if($inp == products[i].name.toLowerCase()){
                $text += "<tr><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td></tr>";
                $("#searchTable").html($text);
            }
                if($inp == products[i].id){
                $text += "<tr><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td></tr>";
                $("#searchTable").html($text);
            }
        }
        $("#inpText").val("");
    })
})