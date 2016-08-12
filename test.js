//NOW WITH ADDED GITHUB!

//TOPBAR DROPDOWN MENUS
var ids = {};
var waitFactor = 100;
function heightTimeoutFunc(b,h,x) {
	setTimeout(function(){
		b.style.height=h;
	},x*100);
}
function animateHeight(b,firstHeight,finalHeight) {
	for (x=0;x<1;x+=.1) {
		heightTimeoutFunc(b,Math.round(firstHeight+((finalHeight-firstHeight)*x)).toString()+"px",x);
	}
}

function topMenuMouseOver(a) {
	var b = a.getElementsByClassName("topMenu")[0];
	var firstHeight = b.clientHeight;
	b.style.height="auto";
	var finalHeight = b.clientHeight;
	b.style.height=firstHeight.toString()+"px";
	ids[a] = (ids[a]==undefined ? 0 : ids[a]+1);
	var id = ids[b];
	animateHeight(b,firstHeight,finalHeight);
	setTimeout(function(){
		if (id==ids[a]) {
			b.style.height="auto";
		}
	},waitFactor*11);
}
function topMenuMouseOut(a) {
	var b = a.getElementsByClassName("topMenu")[0];
	var firstHeight = b.clientHeight;
	ids[a] = (ids[a]==undefined ? 0 : ids[a]+1);
	var id = ids[b];
	animateHeight(b,firstHeight,0);
}
