var tikAction;
var tikNum = 1;
var tikSecond = 9;
var tiktakTimer;

function tiktak() {
	if (tikNum == 2) {
		if (tikSecond <= 9) { tikSecond = "0" + tikSecond; }
	}
	if (document.getElementById) { timer.innerHTML = tikSecond; }
	if (tikNum == 2) {
		if (tikSecond == 0) {
			if (tikAction)
				tikAction();
			return false;
		}
	} else {
		if (tikSecond == 0) {
			if (tikAction)
				tikAction();
			return false;
		}
	}
	tikSecond--;
	tiktakTimer = setTimeout("tiktak()", 1000);
}

function tiktakStart(second, action) {
	tikSecond = second;
	tikAction = action;
	tikNum = 1;
	tiktak();
}

function tiktakStart2(second, action) {
	tikSecond = second;
	tikAction = action;
	tikNum = 2;
	tiktak();
}

function tiktakStop() {
	if (document.getElementById) { redir.style.display = "none"; }
	if (tiktakTimer) { clearTimeout(tiktakTimer); tiktakTimer = false; }
}


redir.innerHTML = '<p class="h2">Redirect to <span id="langspan"></span> - <span id="timer"></span> <a href="javascript:tiktakStop()">Stop</a></p>';

var tikLang = navigator.language;
var tikLang = tikLang.substr(0,2);
if (tikLang != "ru") {
	tikLang = "en";
}
langspan.innerHTML = '<a href="'+tikLang+'">'+tikLang+'</a>';
tiktakStart(0, function(){
	window.location.replace(tikLang);
});
