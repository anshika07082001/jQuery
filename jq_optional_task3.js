$(document).ready(function(){
$products=[
    {id:101,name:"name1",quantity:0,mrp:0,tax:0,total:0},
    {id:102,name:"name2",quantity:0,mrp:0,tax:0,total:0},
    {id:103,name:"name3",quantity:0,mrp:0,tax:0,total:0},
    {id:104,name:"name4",quantity:0,mrp:0,tax:0,total:0},
    {id:105,name:"name5",quantity:0,mrp:0,tax:0,total:0}
]
$min=0;
$tax5=$tax12=$tax18=$tax28=$gTotal=0;
console.log("length="+$("tbody").children().length)
$("#tabItems").on("click","#btnAdd",function(){
    if($(this).parent().parent().find(".inpQuantity").val()=="" || $(this).parent().parent().find(".inpMRP").val()==""){
    alert("Please fill both MRP and Quantity to add new row")
    }
    else{
    $arr=[];
    $arr=$(this).parent().parent().parent().children().each(function(){
        $arr.push($(this))
    })
    
    if($arr.length<$products.length+1){
        console.log($index=$(this).parent().parent())
        $($index).after("<tr><td><select class='selProducts'><option>--Select Product--</option> <option>101 name1</option><option>102 name2</option><option>103 name3</option><option>104 name4</option> <option>105 name5</option></select></td><td><input type='text' class='inpQuantity' disabled/></td><td><input type='text' class='inpMRP' disabled /></td><td><select id='selTax' disabled> <option>0%</option><option>5%</option><option>12%</option><option>18%</option><option>28%</option></select></td><td><input type='text' class='inpTotal' disabled /></td><td><button id='btnAdd' disabled><i class='fa-solid fa-plus'></i></button><button id='btnRemove' disabled><i class='fa-solid fa-trash-can'></i></button></td></tr>")
    }
    else{
        return;
    }
}
    })


$("#tabItems").on("click","#btnRemove",function(){
        $arr=[];let $txt;let $index;
        $arr=$(this).parent().parent().parent().children().each(function(){
            $arr.push($(this))
        })
        console.log($txt=$(this).parent().parent().find("#selTax :selected").text())
        console.log($index=$(this).parent().parent().find(".selProducts :selected").index());
        console.log("tax==",$products[$index-1].tax)
        if($txt=="5%"){
            $tax5-=$products[$index-1].tax
            $("#inp5").val($tax5)
        }
        else if($txt=="12%"){
            $tax12-=$products[$index-1].tax
            $("#inp12").val($tax12)
        }
        else if($txt=="18%"){
            $tax18-=$products[$index-1].tax
            $("#inp18").val($tax18)
        }
        else if($txt=="28%"){
            $tax28-=$products[$index-1].tax
            $("#inp28").val($tax28)
        }
        else{
        }
        $ind=$(this).parent().parent().remove()
        
})

$("#tabItems").on("keyup","input",function(){
    $min++;
    $(".selProducts").attr("disabled","disabled")
    console.log($(this).parent().parent().find("#selTax").removeAttr("disabled"))
   let $this=$(this);
   let $index=$(this).parent().parent().index()
   console.log($index)
   console.log($idName=$(this).parent().parent().find(".selProducts :selected").text())
for(i=0;i<$products.length;i++){
    if($idName==$products[i].id+" "+$products[i].name){
        var $ind=i;
       console.log("ind=",$ind)
    }
}if($ind>=0){
console.log($calTotal($ind,$this));
}
})

$("#tabItems").on("change",".selProducts",function(){
    let $index=$(this).parent().parent().index()
    console.log($index)
    console.log($(this).parent().parent().find(".inpQuantity").removeAttr("disabled"))
    console.log($(this).parent().parent().find(".inpMRP").removeAttr("disabled"))
    console.log($(this).parent().parent().find("button").removeAttr("disabled"))
    
 })
function $calTotal($args,$argsThis){
  console.log($products[$args].quantity=$($argsThis).parent().parent().find(".inpQuantity").val()) 
  console.log($products[$args].mrp=$($argsThis).parent().parent().find(".inpMRP").val()) 
  $totalNum=0;
  console.log($products[$args].quantity)
  console.log($products[$args].mrp)
  $totalNum=$products[$args].quantity*$products[$args].mrp
  $products[$args].total=$totalNum;
  $($argsThis).parent().parent().find(".inpTotal").val($totalNum)
  $dispTotal()
  return parseInt($totalNum);
}
function $dispTotal(){
    $amount=0;
    for(i=0;i<$products.length;i++){
        $amount+=$products[i].total;
    }
    $("#inpAmount").val($amount)
}

$("#tabItems").on("change","#selTax",function(){
    console.log($txt=$(this).find(":selected").text());
    console.log($num=$txt.match(/\d+/)[0])
    let $idName,$ind;
    console.log($idName=$(this).parent().parent().find(".selProducts :selected").text())
for(i=0;i<$products.length;i++){
    if($idName==$products[i].id+" "+$products[i].name){
        $ind=i;
       console.log("ind=",$ind)
    }
}   
    console.log($products[$ind].tax=$products[$ind].total*$num/100);
    if($txt=="5%"){
        $tax5+=$products[$ind].tax
    } 
    else if($txt=="12%"){
        $tax12+=$products[$ind].tax
    } 
    else if($txt=="18%"){
        $tax18+=$products[$ind].tax
    } 
    else if($txt=="28%"){
        $tax28+=$products[$ind].tax
    } 
    $("#inp5").val($tax5)
    $("#inp12").val($tax12)
    $("#inp18").val($tax18)
    $("#inp28").val($tax28)
})
$("#btnSave").click(function(){
    $displayBill();
})
function $displayBill(){
    if($min==0){
        alert("Please fill atleast one row to display bill")
    }
    else{
    $("#bill").css("visibility","visible")
    $cart=[];
    let $arr=$("tbody").children();
    $len=$("tbody").children().length;
 for(i=1;i<$arr.length;i++){
    console.log($name=$("tr").eq(i).find(".selProducts :selected").html())
    obj={Name:$name}
    $cart.push(obj)
 }
 console.log($cart)
 for(i=0;i<$cart.length;i++){
    for(j=0;j<$products.length;j++){
   if($cart[i].Name==$products[j].id+" "+$products[j].name){
    $cart[i]=$products[j];
   }
    }
 }
 console.log($cart)
    $gTotal=parseFloat($("#inpAmount").val())+parseFloat($tax5)+parseInt($tax12)+parseFloat($tax18)+parseFloat($tax28);
    $("#bill").append("<h1>Bill Details</h1>")
    for(i=0;i<$cart.length;i++){
        $("#bill").append("<p>"+$cart[i].id+" "+$cart[i].name+" @ "+$cart[i].quantity+" x "+$cart[i].mrp+" : "+$cart[i].total+"</p>")
    }
    $("#bill").append("<div><p id='paraAmount'>Invoice Amount : "+$("#inpAmount").val()+"</p><p id='paraTax0'>Sales/Purchase Tax @ 0% : 0</p></div><div><p id='paraTax5'>Sales/Purchase Tax @ 5% : "+$tax5+"</p><p id='paraTax12'>Sales/Purchase Tax @ 12% : "+$tax12+"</p></div><div><p id='paraTax18'>Sales/Purchase Tax @ 18% : "+$tax18+"</p><p id='paraTax28'>Sales/Purchase Tax @ 28% : "+$tax28+"</p></div><hr> <div id='GrandTotal'><p id='paraGrandTotal'>Grand Total : "+$gTotal+"</p></div>")
    }
}
})
