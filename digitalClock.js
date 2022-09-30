var $document = $(document);
(function () { 
  var clock = function () {
      clearTimeout(timer);
    
      date = new Date();    
      hours = date.getHours();
      minutes = date.getMinutes();
      seconds = date.getSeconds();
      dd = (hours >= 12) ? 'pm' : 'am';
      
    hours = (hours > 12) ? (hours - 12) : hours
      
      var timer = setTimeout(clock, 1000);
    
    $('.hours').html('<p>' + Math.floor(hours) + ':</p>');
    $('.minutes').html('<p>' + Math.floor(minutes) + ':</p>');
    $('.seconds').html('<p>' + Math.floor(seconds) + '</p>');
      $('.twelvehr').html('<p>' + dd + '</p>');
      $('#date').html('<p>' + date + '<p>');
  };
  clock();

  $hrs = $min = $sec =0,$mil =99,$collect='',$interval='';
    function $check(){
        if($mil<99){
            $mil++;
        }
        else{
            $mil=0;
            if($sec<59){
                $sec++;
            }
            else{
                $min=0;
                if($min<59){
                    $min++;
                }
                else{
                    $min=0;
                    if($hrs<59){
                        $hrs++;
                    }
                }
            }
        }
        $("#hours").html($hrs);
        $("#minutes").html($min);
        $("#seconds").html($sec);
        $("#milliseconds").html($mil);
    }
    $("#btnStart").click(function(){
        clearInterval($interval);
        $interval = setInterval($check,10)
    })
    $("#btnStop").click(function(){
        clearInterval($interval);
    })
    $("#btnReset").click(function(){
        clearInterval($interval)
        $("#hours").html("00");
        $("#minutes").html("00");
        $("#seconds").html("00");
        $("#milliseconds").html("00");
    })    
})();