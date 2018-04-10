var element = $(".layer .b1");
var shown = true;
setInterval(toggle, 800);
function toggle() {
	if(shown) {
		element.hide();
		shown = false;
	} else {
		element.show();
		shown = true;
	}
}