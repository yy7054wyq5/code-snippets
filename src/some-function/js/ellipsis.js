  /**
  *多文字省略号处理
  */
  function ellipsis (txt,obj) {
    //txt 显示的最大字数
    //obj jQuery对象
    var $ellipsisWord = obj;
    if(obj==undefined){
      //IE8 bug
    }
    else{
      for (i = 0; i < $ellipsisWord.length; i++){
            var text = $ellipsisWord[i];
            str = text.innerHTML;
            var textLeng = txt;
            if (str.length > textLeng) {
                text.innerHTML = str.substring(0, textLeng) + "...";
            }
      }
    }
  }