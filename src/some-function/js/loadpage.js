/**
*分页
*/
function loadPage(currentPage,totalPage) {
    var upClass = '';
    var downClass = '';
    var pagesNum = '';
    var firstPage = '';
    var lastPage = '';
    var firstClass;
    var lastClass;
    var headAction = '<span>...</span>';
    var footAction = '<span>...</span>';

    function pageCount (start,end) {
        for (var i = start; i < end; i++) {
          if(i==currentPage){
              pagesNum += '<a role=\"button\" index=\"'+i+'\" class=\"active\">'+i+'</a>';
          }
          else{
              pagesNum += '<a role=\"button\" index=\"'+i+'\">'+i+'</a>';
          }
        }
    }

    /*前五页*/
    if(currentPage<7){
        if(totalPage<7){
            //console.log('前5，总页小于7');
            pageCount(2,totalPage);
        }
        else{
            //console.log('前5，总页大于等于7');
            pageCount(2,7);
        }
    }
    /*中间页*/
    else if(currentPage<totalPage-5&&currentPage>=7){
        //console.log('中');
        pageCount(parseInt(currentPage) - 2,parseInt(currentPage)+3);
    }
    /*后五页*/
    else if(currentPage>=totalPage-5){
        //console.log('后5');
        pageCount(parseInt(totalPage)-5,totalPage);
    }

    //控制头尾的显示
    if(currentPage==1){
        upClass = 'nopage';
        firstClass = 'active';
        lastClass = '';
        headAction = '';
        if(totalPage<=7){
            footAction = '';
        }
    }
    else if(currentPage==totalPage){
        downClass = 'nopage';
        firstClass = '';
        lastClass = 'active';
        footAction = '';
        if(totalPage<=7){
            headAction = '';
        }
    }
    else{
        firstClass = '';
        lastClass = '';
        if(currentPage<7){
          headAction = '';
          if(totalPage<=7){
            footAction = '';
          }
        }
        else if(currentPage<totalPage&&currentPage>=totalPage-5){
          footAction = '';
        }
    }
    //首页尾页的处理
    firstPage = '<a role=\"button\" index=\"1\" class="'+firstClass+'">1</a>'+headAction+'';
    lastPage = ''+footAction+'<a role=\"button\" index=\"'+totalPage+'\" class="'+lastClass+'">'+totalPage+'</a>';
    //只有1页的特殊处理
    if(currentPage==1&&totalPage==1){
        lastPage = '';
        downClass = 'nopage';
    }
    //组装分页
    pageAction = '<a class=\"page-up ' +upClass+'\" role=\"button\">&lt;&nbsp;上一页</a>'+firstPage+pagesNum+lastPage+''+
                            '<a class=\"page-down '+downClass+'\" role=\"button\">下一页&nbsp;&gt;</a>'+
                            '<span style=\"margin-left:50px;\">共'+totalPage+'页</span>'+
                            '<span>到第</span>'+
                            '<input type=\"text\">'+
                            '<span>页</span>'+
                            '<a role=\"button\" class=\"btn\">确定</a>';
    $('.page-action').html(pageAction);
    //return '<div class="page-action white">'+pageAction+'</div>';
}