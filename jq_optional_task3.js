var Item=[{Item:"111-Product1",Price:"240"},
{Item:"102-Product2",Price:"540"},{Item:"121-Product3",Price:"840"},{Item:"124-Product4",Price:"140"}];
var Tax=[{tax:0},{tax:5},{tax:12},{tax:18},{tax:28}];
var prd=[{"item":"111-Silver","Qty":0,"MRP":0,"TAX":0,"TOTAL":0}];
populate();
function optioner(arr,data,value)
{
 var temp="";
 for(var i=0;i<arr.length;i++)
 {
    var sign=(data=="tax")?"%": "";
    var sel= (arr[i][data]==value)?"selected":"";
    temp+='<option value="'+arr[i][data]+'" '+sel+'>'+arr[i][data]+' '+sign+'</option>';
 }
 return temp;
}
function populate()
{
    $("#tbody1").html("");
    var temp="";
    for(var i=0;i<prd.length;i++)
    {
        temp+='<tr><td><select class="input" id="item" index="'+i+'">'+optioner(Item,"Item",prd[i].item)+'</select></td><td><input index="'+i+'" value="'+prd[i].Qty+'" id="Qty" class="input" type="number"></td><td><input index="'+i+'" class="input" id="MRP" value="'+prd[i].MRP+'" type="number"></td><td><select id="TAX" class="input" index="'+i+'">'+optioner(Tax,"tax",prd[i].TAX)+'</select></td><td><input index="'+i+'" id="TOTAL'+i+'" value="'+prd[i].TOTAL+'" type="number" disabled></td><td><button index="'+i+'" class="add">+</button><button index="'+i+'" class="del"><i class="fa fa-trash" aria-hidden="true"></i></button></td></tr>'        
    }
    $("#tbody1").html(temp);
}
$("#tbody1").on("click",".add",function()
{
    index=parseInt($(this).attr('index'))+1;
    prd.splice( index, 0, {"item":"111-Silver","Qty":0,"MRP":0,"TAX":0,"TOTAL":0});
    populate()
})
$("#tbody1").on("click",".del",function()
{
    index=parseInt($(this).attr('index'));
    prd.splice( index, 1);
    populate();
    taxes();
})
function addData(row)
{
    let value=row.val();
    let keyObj=row.attr("id");
    let i=parseInt(row.attr("index"));
    $.each(prd[i], function(key, va){
        if(key==keyObj)
        {
            if(keyObj=="item")
            {
                prd[i][key]=value;
            }
            else
            {
        
            prd[i][key]=parseInt(value);
            prd[i]["TOTAL"]=prd[i].MRP*prd[i].Qty ;
            $("#TOTAL"+i).val(prd[i]["TOTAL"]);
            }
        
        }
    });
}
$("#tbody1").on("input",".input",function()
{
    addData($(this));
    taxes();
  
})
function taxes()
{
    sum=0;
    prd.map((x)=>sum+=x.TOTAL);
    $("#Innovice").val(sum);
    let per0=0;prd.map((x)=>{(x.TAX==0)?per0+=x.TOTAL*0:""});$("#p0").val(per0);
    let per5=0;prd.map((x)=>{(x.TAX==5)?per5+=x.TOTAL/20:""});$("#p5").val(per5);
    let per12=0;prd.map((x)=>{(x.TAX==12)?per12+=x.TOTAL*12/100:""});$("#p12").val(per12);
    let per18=0;prd.map((x)=>{(x.TAX==18)?per18+=x.TOTAL*18/100:""});$("#p18").val(per18);
    let per28=0;prd.map((x)=>{(x.TAX==28)?per28+=x.TOTAL*28/100:""});$("#p28").val(per28);
    $(".innovice").hide();
}
$("#save").click(function()
{
    populateInnovice();
    $(".p0").text($("#p0").val());
    $(".p5").text($("#p5").val());
    $(".p12").text($("#p12").val());
    $(".p18").text($("#p18").val());
    $(".p28").text($("#p28").val());
    $("#subtotal").text($("#Innovice").val());
    $("#grandTotal").text(eval($("#Innovice").val()+"+"+$("#p0").val()+"+"+$("#p5").val()+"+"+$("#p12").val()+"+"+$("#p18").val()+"+"+$("#p28").val()));
    $(".innovice").show();
})

function populateInnovice()
{
    var temp="";
    for(var i=0;i<prd.length;i++)
    {
        temp+='<tr><td>'+prd[i].item+'</td><td>'+prd[i].MRP+'</td><td>'+prd[i].Qty+'</td><td>'+prd[i].TAX+'%</td><td>'+prd[i].TOTAL+'</td></tr>'        
    }
    $("#itbody").html(temp);
}