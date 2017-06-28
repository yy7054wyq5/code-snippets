/**
*弹窗
*/

var toolTips = {
    btn: function (tips,url,btn,foo) {
        var isReady = $('.alert-tips').hasClass('alert-tips');
        var tipsBody = '<div class="alert-tips">'+
        '<div class="tips">提示</div>'+
        '<div class="closeBtn"></div>'+
        '<table>'+
        '<tr>'+
        '<td class="tips-con">'+tips+'</td>'+
        '</tr>'+
        '</table>'+
        '<a class="detail-btn" id="sure" href="'+url+'">'+btn+'</a><a class="detail-btn" id="cancel">取消</a>'+
        '</div>';
        if(!isReady) $('body').append(tipsBody);
        foo(url);
        $('.alert-tips').show();
    },
    txt: function (txt,foo) {
        var tipsTop = toolTips.top;
        var clientWidth = toolTips.width;
        var tipsBody = '<div class=\"little-tips\">'+txt+'</div>';
        if($('.little-tips').hasClass('little-tips')){
            $('.little-tips').html(txt).show();
        }
        else{
            $('body').append(tipsBody);
        }
        //提示框定位;
        $('.little-tips').css({'left': clientWidth / 2-$('.little-tips').width()/2-50,'top': tipsTop}).show();
        setTimeout(function () {
            $('.little-tips').fadeOut();
        },2000);
    }
};



