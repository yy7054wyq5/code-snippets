/**
*发送验证码
*约定：
*返回2，等待
*返回1，失败
*返回0，成功
*/
function captcha(mobileNum) {
    var $send = $('.send');
    var txt;
    var tips;
    if($send.hasClass('wait')){
        return 2;
    }
    else{
        //需要接口
        $send.addClass('wait').text('还有60s');                  
        var time = 60;
        var timeInt = setInterval(function () {
            time = time -1;
            $send.text('还有'+time+'s');
            //console.log(time);
        },1000);
        setTimeout(function  () {
            window.clearInterval(timeInt);
            $send.removeClass('wait').text('重新发送');
        },60000);
        return tips = 1332;
    }
}