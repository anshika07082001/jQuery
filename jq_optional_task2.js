$(document).ready(function(){
   $arr =[{id:"1",Name:"Mouse",price:"14.99",total:"0",img:"1.jpg",quantity:'0'},
        {id:"2",Name:"Keyboard",price:"79.99",total:"0",img:"2.jpg",quantity:'0'},
        {id:"3",Name:"Handfree",price:"17.99",total:"0",img:"3.png",quantity:'0'}];
    //dynamically populate function    
    $subTotal=0;
    $tax=0;
    function $populate(){
        $subTotal=0;
        $tax=0;
        $text = "";
        $text = "<div id='header'><span>Shopping Cart[ ]</span></div>"
        for(i=0;i<$arr.length;i++){
            $text+="<div id='divMouse'><div id='imgMouse'><img src='"+$arr[i].img+"'></div><div id='contentMouse'><div id='mouseHead'><h3>"+$arr[i].Name+"</h3></div><div id='mousePara'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quae in, ut voluptatibuspossimus facilis exercitationem facere maiores libero assumenda totam velit ullam explicabo, cupiditate quis iure omnis sunt sequi.</p></div><div id='mouseBtn'><div id='btnLeft'><button class='btnMinus'>-</button><input value='"+$arr[i].quantity+"' class='mouseInp'><button class='btnPlus'>+</button></div><div id='btnRight'><p class='price'>"+$arr[i].price+"</p><p class='total'>"+$arr[i].total+"</p></div></div></div></div>";
            $subTotal += parseFloat($arr[i].total);
        }
        $subTotal=parseFloat($subTotal).toFixed(2)
        $tax = $subTotal*0.05;
        $tax =$tax.toFixed(2)
        $Total=parseFloat($subTotal)+parseFloat($tax)+parseFloat(5.0)
        $Total = $Total.toFixed(2);
        $("#container").html($text);
    }
    $populate();
    //minus function
    $("#container").on("click",".btnMinus",function(){
        $index = $(this).parent().parent().parent().parent().index();

        $inp = $(this).next().val();
        if($inp==0){
            return;
        }
        else{
        $inp = parseInt($arr[$index-1].quantity)-parseInt(1)
        $total = parseFloat($arr[$index-1].price)*parseInt($inp);
        $total=$total.toFixed(2)
        $arr[$index-1].total=$total;
        $arr[$index-1].quantity=$inp;
        $populate();
        $populateTotal();
        }
    })
    // Plus function
    $("#container").on("click",".btnPlus",function(){
        $index = $(this).parent().parent().parent().parent().index();
        $inp = $(this).prev().val();
        $inp = parseInt($arr[$index-1].quantity)+parseInt(1)
        $total = parseFloat($arr[$index-1].price)*parseInt($inp);
        $total=$total.toFixed(2)
        $arr[$index-1].total=$total;
        $arr[$index-1].quantity=$inp;
        $populate();
        $populateTotal();
    })    
    // populatetotal function
    $totalArr=[];
    function $populateTotal(){
        $text = "";
        $text = "<div id='totalDiv'><div id='divLeft'><div class='c'>SubTotal="+$subTotal+"</div><div class='c'>Taxes(5%):"+$tax+"</div><div class='c'>Shipping:5.00$</div></div><div id='divRight'><div class='c'>Total:"+$Total+"</div><div class='c' id='d'>Checkout</div></div></div>";
        $('#footer').html($text);
        if($subTotal==0){
            $('#footer').html("");
        }
    }
})
