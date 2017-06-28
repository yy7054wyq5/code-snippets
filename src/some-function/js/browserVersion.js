/**
*判断浏览器版本
*/
function browserVersion(foo) {
    var browser = navigator.appName;  //判断IE浏览器版本
    var version = navigator.userAgent.split(";");
    var bversion;
    //xp中的chrome
    if(version[0]==undefined){
        return false;
    }
    var trimVersion = version[1].replace(/[ ]/g,"");
    var ie = browser=="Microsoft Internet Explorer";
    var ie7 = trimVersion=="MSIE7.0";//IE7下返回true
    var ie8 = trimVersion=="MSIE8.0";//IE8下返回true
    var ie9 = trimVersion=="MSIE9.0";//IE9下返回true
    var ie10 = trimVersion=="MSIE10.0";//IE10下返回true
    var ie11 = "ActiveXObject" in window;//IE11返回true
    if(ie && ie7){//IE7
        bversion = 'ie7';
        foo(bversion);
    }
    else if(ie && ie8){//IE8
        bversion = 'ie8';
        foo(bversion);
    }
    else if(ie && ie9){//IE9
        bversion = 'ie9';
        foo(bversion);
    }
    else if(ie && ie10){//IE10
        bversion = 'ie10';
        foo(bversion);
    }
    else if(ie11){//IE11
        bversion = 'ie11';
        foo(bversion);
    }
    else{//chrome firefox safari opera
        var cc = version[1];
        if(cc.indexOf('WebKit')>-1){//chrome  safari opera
            bversion = 'WebKit';
            foo(bversion);
        }
        else{
            if(cc.indexOf('Firefox')>-1){//firefox
                bversion = 'ff';
                foo(bversion);
            }
        }
    }
}
