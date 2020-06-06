var box = document.getElementById("box");
var ball = document.getElementById("ball");
var obstc = document.getElementById("obstc");
var ht = document.getElementById("ht");
var xb = 88, yb = 66, xo = 388, yo = 266, timer1 = null, timer2 = null, movexb = true, moveyb = true, movexo = true, moveyo = true, totalSpdBall = 3, spdBall = totalSpdBall / 3, score = 0, heart = 100;
timer1 = setInterval(function(){
	if (movexb) {
		xb += totalSpdBall - spdBall;
		if (xb >= box.clientWidth - ball.clientWidth) {
			movexb = false;
		}
		ball.style.left = xb + "px";
	}
	else {
		xb -= totalSpdBall - spdBall;
		if (xb <= 0) {
			movexb = true;
		}
		ball.style.left = xb + "px";
	}
	if (moveyb) {
		yb += spdBall;
		if (yb >= box.clientHeight - ball.clientHeight) {
			moveyb = false;
		}
		ball.style.top = yb + "px";
	} else {
		yb -= spdBall;
		if (yb <= 0) {
			moveyb = true;
		}
		ball.style.top = yb + "px";
	}
	heart += 0.0025;
	ht.style.width = heart * 10 + "px";
}, 10);

timer2 = setInterval(function(){
	if (movexo) {
		xo += 1.7;
		if (xo >= box.clientWidth - obstc.clientWidth) {
			movexo = false;
		}
		obstc.style.left = xo +"px";
	}
	else {
		xo -= 1.7;
		if (xo <= 0) {
			movexo = true;
		}
		obstc.style.left = xo +"px";
	}
	if (moveyo) {
		yo += 1.7;
		if (yo >= box.clientHeight - obstc.clientHeight) {
			moveyo = false;
		}
		obstc.style.top = yo + "px";
	} else {
		yo -= 1.7;
		if (yo <= 0) {
			moveyo = true;
		}
		obstc.style.top = yo + "px";
	}
	score += 0.01;
	if (!((xo + 50) < xb || (xb + 50) < xo || (yo + 50) < yb || (yb + 50) < yo)){
		heart -= 2.1;
		totalSpdBall -= 0.02;
	}
	if (totalSpdBall <= 0) {
		clearInterval(timer1);
		clearInterval(timer2);
		alert("Before you are so weak and exausted, you survived for " +  Math.round(score) + " seconds.");
		if (location.reload(true)) {location.reload(true)};
		if (history.go(0)) {history.go(0)};
	}
	if (heart <= 0) {
		clearInterval(timer1);
		clearInterval(timer2);
		alert("Before your enemy kill you, you survived for " +  Math.round(score) + " seconds.");
		if (location.reload(true)) {location.reload(true);}
		if (history.go(0)) {history.go(0);}
	}
}, 1);
