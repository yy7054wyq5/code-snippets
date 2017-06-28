;(function ($,window,document,undefined) {
	$.fn.fullCalendar = function(options) {
		//默认配置
		var dft = {
			monthClass: 'default'
		};
		var ops = $.extend(dft,options);//合并配置
		//console.log(ops);
		var $self = $(this);
		var monthHtml = '';
		//将数值转换为数字数组
		//比如是3，转换为[0,1,2]
		function setdays(days) {
			var daysArray = [];
			for (var i = 0; i < days; i++) {
				daysArray[i] = i+1;
			}
			return daysArray;
		}
		var date = new Date();
		var year =  ops.year || date.getFullYear();
		var monthday = [31,0,31,30,31,30,31,31,30,31,30,31];//每月的天数
		var weekday = [];
		var _weekday = [];
		//是否为闰年
		if(year % 400 === 0||year % 4 === 0&& year % 100 !== 0) monthday[1] = 29;
		else monthday[1] = 28;
		//获取每月1号是星期几
		//注意：这里j的值在实例化时会自动+1，毋须手动+1
		for (var j = 0; j < 12; j++) {
			var _date = new Date(year,j,1);
			//星期0
			if(_date.getDay()===0){
				weekday[j] = 6;
			}else{
				weekday[j] = parseInt(_date.getDay())-1;
			}
			
		}
		//将monthday、weekday内的元素转换为数组以便ng-repeat
		for (var i = 0; i < 12; i++) {
			monthday[i] = setdays(monthday[i]);
			weekday[i] = setdays(weekday[i]);
		}
		//将每月1号的星期数转换为数组并将元素替换为空格
		for (var k = 0; k < 12; k++) {
			var trs = weekday[k];
			var _trs = [];
			for (var m = 0; m < weekday[k].length; m++) {
				_trs[m] = trs[m].toString().replace(/\d/g, '&nbsp;');
			}
			 _weekday[k] = _trs;
		}
		//合并每月天数和1号星期数
		for (var n = 0; n < 12; n++) {
			monthday[n] = _weekday[n].concat(monthday[n]);
		}
		$.each(monthday, function(index, val) {
			var dayHtml = '';
			var dayClass = '';
				var month = parseInt(index)+1;
			$.each(val, function(indexday, valday) {
				//console.log(year+'-'+index+'-'+valday);
				var _new_date = new Date(year,index,valday);
				var _timestamp = Date.parse(new Date(_new_date));
				var holidayName="";
				if (_new_date.getDay() == 6 || _new_date.getDay() === 0) {
					if ((Array.isArray(ops.holiday) && ops.holiday.length === 0)
						|| (Object.prototype.isPrototypeOf(ops.holiday) && Object.keys(ops.holiday).length === 0)) {
						dayClass = 'chose';
					} else {
						$.each(ops.holidays, function (i, n) {
							if (n.dayTimestamp == new Date(_timestamp)) {
								holidayName = n.name;
								dayClass = 'chose';
							}
						});
					}
				}else{
					dayClass = '';
				}
				dayHtml += '<span data-year="'+year+'" data-month="'+month+'" data-day="'+valday+'" data-time="'+_timestamp+'" data-id="" class="day '+dayClass+'">'+valday+'<br><i>'+holidayName+'</i><s class="closed"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJDODIxNkU2OTY5QTExRTZCMkFEODBGNjhFOTRFNEVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJDODIxNkU3OTY5QTExRTZCMkFEODBGNjhFOTRFNEVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkM4MjE2RTQ5NjlBMTFFNkIyQUQ4MEY2OEU5NEU0RUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkM4MjE2RTU5NjlBMTFFNkIyQUQ4MEY2OEU5NEU0RUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Phz+bAAABXklEQVR42pRSMU7DQBA8R3Q2UNjA0TtAEZoghTfEJDThA6RHQvwEevhBmkhxStISiTSkiMCitiO7AZKCwmbG8p0MEqCMtLfr3R3f3d4YWZYJheHQd+CuYC3YXpGewfqwm2bTi1WvoYggdeBuXdfdlHJXmKaZ5xeLDxGGoQiC4A2fXZB7eYFE3x90YGkcx9lvYI097CXHQLAFftBoHG/Yti3+QpIkYjx+4M7VCpYL161q0mh0L/B33cyYOYI97EV4SeKplDu6sVY7FJPJY06gMWZOQUpJ11rDcmCali44jiPq9aOcQDBmTqEY2n5FrIjiFT5JnHHk5TtxN+6kdi7feblc0r2S2A/DSBem0yd9PHVs5hT4psCAz7GN4GXl54AS5lQEEhkL/5B4wa7nnczLkjuDu4Pk1ik5y7JEmqaQ3EJEUS65d9TPQep90+oPkbc5ck4P9sw7wa5B0lP6EmAA5ObTiEbj/WoAAAAASUVORK5CYII="></s></span>';
			});
			monthHtml += 
					'<div class="col-xs-12 col-sm-6 col-md-4 month '+ops.monthClass+'">'+
						'<div class="monthName">'+month+'月</div>'+
						'<div class="week clear"><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div><div>日</div>'+
				  	'</div><div class="days clear">'+dayHtml+'</div></div>';
		});
		$('.year').text(year);
		$self.html('<div class="row full-calendar">'+monthHtml+'</div>');
		//点击编辑节日，和是否选中状态
		var arr=[];
		$('.full-calendar').on('click', '.day', function(event) {
			var ab = $(this);
			var htm = ab.find("i").html();
			if (!ab.hasClass("chose")) {
				ab.addClass("chose");
			}
			layer.prompt({ value: htm,title:"请输入节假日名称"},function(val){//插件方法：弹出层
				var index=layer.prompt();
				layer.close(index);
				ab.find("i").html(val);
			});
		});
		$(".holiday").click(function(){//点击提交按钮
			var chose=$('.chose');
			$.each(chose,function(i,n){
				arr.push({"name":$(n).find("i").html(),dayTimestamp:$(n).attr("data-time")/1000,id:$(n).attr("data-id")});
			})
			ops.fn(arr);
		})
		//进入日期出现提示；
		$('.full-calendar').on('mouseenter', '.day', function(event) {
			var ab = $(this);
			var htm = ab.find("i").html();
			if(htm!= ""&&(/\s*\S+/).test(htm)){
				layer.tips(htm,ab);
			}
			ab.find(".closed").click(function(event){
				var _this=$(this);
				event.stopPropagation();
				layer.confirm("您确定删除假日吗?",{icon:3,title:"信息"},function(){
					var index=layer.confirm();
					_this.parent().find("i").html("");
					_this.parent().removeClass("chose")
					layer.close(index);
				})
			})
		});
		function shiftTime(timestamp,holiday,id){//timestamp:时间戳；holiday：节日名称;id：data-id属性名称
			var time = new Date(parseInt(timestamp) * 1000).toLocaleDateString();
			var arr = time.split("/");
			var obj=$("span[data-year='"+arr[0]+"'][data-month='"+arr[1]+"'][data-day='"+arr[2]+"']");
			obj.find("i").html(holiday);
			obj.addClass("chose").attr("data-id",id);
		}
		//便利获取的数据，渲染页面
		$.each(ops.holiday,function(i,n){
			shiftTime(n.dayTimestamp,n.name,n.id);
		})	
	};
})(jQuery,window,document);
