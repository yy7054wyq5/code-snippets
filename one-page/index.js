// 实现 ECMA-262, Edition 5, 15.4.4.19
// 参考: http://es5.github.com/#x15.4.4.19
if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {

    var T, A, k;

    if (this == null) {
      throw new TypeError(" this is null or not defined");
    }

    // 1. 将O赋值为调用map方法的数组.
    var O = Object(this);

    // 2.将len赋值为数组O的长度.
    var len = O.length >>> 0;

    // 3.如果callback不是函数,则抛出TypeError异常.
    if (Object.prototype.toString.call(callback) != "[object Function]") {
      throw new TypeError(callback + " is not a function");
    }

    // 4. 如果参数thisArg有值,则将T赋值为thisArg;否则T为undefined.
    if (thisArg) {
      T = thisArg;
    }

    // 5. 创建新数组A,长度为原数组O长度len
    A = new Array(len);

    // 6. 将k赋值为0
    k = 0;

    // 7. 当 k < len 时,执行循环.
    while (k < len) {

      var kValue, mappedValue;

      //遍历O,k为原数组索引
      if (k in O) {

        //kValue为索引k对应的值.
        kValue = O[k];

        // 执行callback,this指向T,参数有三个.分别是kValue:值,k:索引,O:原数组.
        mappedValue = callback.call(T, kValue, k, O);

        // 返回值添加到新数组A中.
        A[k] = mappedValue;
      }
      // k自增1
      k++;
    }

    // 8. 返回新数组A
    return A;
  };
}

if (!Array.prototype.filter) {
  Array.prototype.filter = function (fun /*, thisArg */) {

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function")
      throw new TypeError();

    var res = [];
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i];

        // NOTE: Technically this should Object.defineProperty at
        //       the next index, as push can be affected by
        //       properties on Object.prototype and Array.prototype.
        //       But that method's new, and collisions should be
        //       rare, so use the more-compatible alternative.
        if (fun.call(thisArg, val, i, t))
          res.push(val);
      }
    }

    return res;
  };
}

/*
* 获取dom
*/
function _getDom(classname) {
  return document.getElementsByClassName(classname)[0];
}

/*
* 去掉原样式的display:block 或者 display:none
*/

function _cutDisplayStyle(styleStr) {
  if (styleStr) {
    var arr = styleStr.split(';')
      .map(function (i) {
        if (i === 'display: block' || i === 'display: none') {
          return undefined;
        }
      });
      
    arr.filter(function (value) {
      if (value) {
        return value;
      }
    });
    if (arr.length === 0) {
      return '';
    } else {
      return arr.join('');
    }
  }

}

/*
* 显示
*/

function _show(dom) {
  var oldStyle = dom.getAttribute('style');
  dom.setAttribute('style', _cutDisplayStyle(oldStyle) + ';display: block;');
}

/*
* 隐藏
*/
function _hide(dom) {
  var oldStyle = dom.getAttribute('style');
  dom.setAttribute('style', _cutDisplayStyle(oldStyle) + ';display: none;');
}


/*
 * 布局
 */

function layout() {
  var pc = _getDom('pc');
  var mobile = _getDom('mobile');
  var pcHackTop = _getDom('pc-hack-top');
  var pcHackBottom = _getDom('pc-hack-bottom');
  var mobileHack = _getDom('mobile-hack');
  var mobileContent = _getDom('mobile-content');
  var mobileImg = _getDom('mobile-img');
  if (window.innerWidth <= 1000) {
    document.body.className = 'mobile-body';
    _hide(pc);
    _show(mobile);
    var height = window.innerHeight - mobileHack.clientHeight - mobileImg.clientHeight;
    mobileContent.setAttribute('style' , 'height:' + height + 'px');
  } else {
    document.body.className = 'pc-body';
    _show(pc);
    _hide(mobile);
    var hackHeight = (window.innerHeight - 660) / 2;
    pcHackTop.setAttribute('style', 'height:' + hackHeight + 'px');
    pcHackBottom.setAttribute('style', 'height:' + hackHeight + 'px');
  }
}


/*
* 移动端计算
*/

function htmlFontSize() {
  var html = document.getElementsByTagName('html')[0];
  if (window.innerWidth > 1000) {
    html.removeAttribute('style');
    return;
  }
  var dpr, rem;
  var docEl = document.documentElement;
  dpr = window.devicePixelRatio || 1;
  rem = docEl.clientWidth * dpr / 10;
  var fontSize = rem / dpr;
  // 动态写入样式
  html.setAttribute('style', 'font-size:' + fontSize + 'px!important');
  window.rem = fontSize;
}

/*
* 根据浏览器显示不同的按钮和状态
*/

function withNavigator() {
  var mobile_android_link = _getDom('mobile-android');
  var mobile_ios_link = _getDom('mobile-ios');
  var shadow = _getDom('shadow');
  if (navigator.userAgent.indexOf('iPhone') > -1 || navigator.appVersion.indexOf('iPhone') > -1) {
    _hide(mobile_android_link);
    _show(mobile_ios_link);
  } else if (navigator.userAgent.indexOf('iPad') > -1 || navigator.appVersion.indexOf('iPad') > -1) {
    _hide(mobile_android_link);
    _show(mobile_ios_link);
  } else {
    _show(mobile_android_link);
    _hide(mobile_ios_link);
  }
  if (typeof WeixinJSBridge !== 'undefined') {
    _show(shadow);
    setTimeout(function () {
      _hide(shadow);
    }, 2000);
  } else {
    _hide(shadow);
  }
}

/*
* 初始化
*/

htmlFontSize();
layout();
withNavigator();

/*
* 随窗口变化重新布局
*/

window.onresize = function () {
  htmlFontSize();
  layout();
  withNavigator();
};