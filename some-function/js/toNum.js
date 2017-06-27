/**
*去掉小数点第三位及之后的数字，返回字符串
*/
function toNum(num) {
	var b = /([0-9]+\.[0-9]{2})[0-9]*/;
	var a = num.toString();
	var c = a.replace(b,"$1");
	return c;
}