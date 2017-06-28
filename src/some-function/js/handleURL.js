/**
*URL传参、取参以及跳转
*例子:http://xxoo.com?name=dada&age=120&height=200
*set('color','red')：为URL添加参数,返回http://xxoo.com?name=dada&age=120&height=200&color=red的字符串
*jump('color','red','href')：返回http://xxoo.com?name=dada&age=120&height=200&color=red直接跳转,href可以为空
*getParam()：获取URL内参数,返回name=dada&age=120&height=200的字符串,便于异步请求数据
*markValue('color')：返回red,如果没有该key,返回undefined
*insertCookies(URL)将url存入cookie
*/
var handleURL = {
    set:function (key,value,href) {
        var URL;
        if(href==undefined){
            href = location.href;
        }
        var index = href.indexOf('?');
        if(index<0){//url没有参数
            URL = href + '?'+key+'='+value;
        }
        else{//url已有参数
            var keyIndex = href.indexOf(key);
            if(keyIndex<0){//url没有该参数
                URL = href +'&'+key+'='+value;
            }
            else if(keyIndex>0){//url有该参数
                var a = href.substring(0,keyIndex);
                var b = href.substring(keyIndex,href.length);
                if(b.indexOf('&')<0){//该参数在最后
                    b = b.substring(0,b.indexOf('=')+1) + value;
                    URL = a + b;
                }
                else{//该参数不在最后
                    var c = b.substring(b.indexOf('&'),b.length);
                    b = b.substring(0,b.indexOf('=')+1) + value;
                    URL = a + b + c;
                }
            }
        }
        return URL;
    },
    getParam:function () {
        var Href = location.href;
        var index = Href.indexOf('?');
        var param = Href.substr(index+1,Href.length);
        return param;
    },
    markValue:function (key) {
        var Href = location.href;
        var index = Href.indexOf(key);
        if(index<0){
            return undefined;
        }
        else{
            var a = Href.substring(index,Href.length);
            var aindex = a.indexOf('&');
            if(aindex<0){
                var b = a.substring(key.length+1,a.length);
            }
            else{
                var b = a.substring(key.length+1,aindex);
            }
        }
        return b;
    },
    insertCookies:function (URL) {
        Cookies.set('url',URL,{expires:1});
    },
    jump:function (key,value,href) {
        var newURL;
        if(href==undefined){
            href = location.href;
        }
        if(key=='page'){
            newURL = handleURL.set(key,value,href);
        }
        else{
            newURL = handleURL.set(key,value,handleURL.set('page',1,href));
        }
        handleURL.insertCookies(newURL);
        location.href = newURL;
    }
};

