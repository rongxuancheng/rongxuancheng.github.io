///////倒数 开始\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var day = document.getElementById("day"),
	hour = document.getElementById("hour"),
	min = document.getElementById("min"),
	sec = document.getElementById("sec");

var itemTexts = document.getElementsByClassName("item-text");


// 获取大容器
var wrapStart = document.querySelector(".wrap-start");
var wrapCake = document.querySelector(".wrap-cake");
var wrapPhotos = document.querySelector(".wrap-photos");

// wish
var wish = document.querySelector(".wish");
// wish.style.display = "block"

// 音频
var audioBir = document.getElementById("audioBir");

function secFun() {
	sec.onclick = function() {
		wrapStart.style.display = "none";
		wrapPhotos.style.display = "block";
		// wrapCake.style.display = "block";

		////////////////音频 开始\\\\\\\\\\\\\\\\\\\\\\\

		audioBir.play();


		// 蛋糕定时出现
		var cakeIndex = 0;
		var cakeTimer;


		cakeTimer = setInterval(function() {
			cakeIndex++;

			if (cakeIndex >= 12) {
				wrapPhotos.style.display = "none";
				wrapCake.style.display = "block";

				wish.style.display = "block";
				clearInterval(cakeTimer);


			}
			// else if(cakeIndex >= 18){
			// 	wish.style.display = "block";

			// 	wrapCake.style.display = "none";
			// 	endFun();
			// 	clearInterval(cakeTimer);
			// }

		}, 1000);
	}
}



counDown();

function addZero(i) {
	return i < 10 ? "0" + i : i + "";
}



function counDown() {
	// console.log(t)
	var nowTime = new Date();
	var endTime = new Date(t);

	var leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);

	var birDay = parseInt(leftTime / (24 * 60 * 60));
	var birHour = parseInt(leftTime / (60 * 60) % 24);
	var birMin = parseInt(leftTime / 60 % 60);
	var birSec = parseInt(leftTime % 60);

	birDay = addZero(birDay);
	birHour = addZero(birHour);
	birMin = addZero(birMin);
	birSec = addZero(birSec);

	day.innerHTML = `${birDay}天`;
	hour.innerHTML = `${birHour}时`;
	min.innerHTML = `${birMin}分`;
	sec.innerHTML = `${birSec}秒`;
	sec.style.background = "";

	if (leftTime <= 0) {
		secFun();
		
		itemTexts[0].innerHTML = "今天";
		day.innerHTML = "天气";
		hour.innerHTML = "真好";
		min.innerHTML = "→_→";
		sec.style.color = "transparent";
		sec.style.display = "block";
		sec.style.backgroundPosition = "center";
		sec.style.background = "block";
		sec.style.backgroundImage = "url(public/img/cap.png)";
		sec.style.backgroundRepeat = "no-repeat";
		sec.style.cursor = "pointer";

		return;
	}

	setTimeout(counDown, 1000);
}

///////倒数 结束\\\\\\\\\\\\\\\\\\\\\\\\\\\\\











var navBtn = document.getElementById("navBtn");

var navContent = document.querySelector(".nav-content");

var navItems = document.querySelector(".nav-items");
var itemTexts = navItems.getElementsByTagName("span");

// 按钮横杆
var btnRails = navBtn.getElementsByTagName("span");

var navJudge = false;

navBtn.onclick = function() {

	if (navJudge == false) {
		navContent.classList.add("content");

		for (var i = 0; i < itemTexts.length; i++) {
			itemTexts[i].style.animation = "nav01 1.5s forwards";
		}

		btnRails[0].style.transform = " translateY(7px) rotate(-225deg)";
		btnRails[0].style.transition = " 1s  cubic-bezier(0.48, 0.43, 0.29, 1.3)";

		btnRails[1].style.transform = "translateY(-7px) rotate(225deg)";
		btnRails[1].style.transition = " 1s  cubic-bezier(0.48, 0.43, 0.29, 1.3)";

		navJudge = true;
	} else {
		navContent.classList.remove("content");

		for (var i = 0; i < itemTexts.length; i++) {
			itemTexts[i].style.animation = "nav02 1.2s forwards";
		}

		// 按钮
		btnRails[0].style.transform = " translateY(0px) rotate(0deg)";
		btnRails[0].style.transition = "1s  cubic-bezier(0.48, 0.43, 0.29, 1.3)";

		btnRails[1].style.transform = " translateY(0px) rotate(0deg)";
		btnRails[1].style.transition = " 1s  cubic-bezier(0.48, 0.43, 0.29, 1.3)";

		navJudge = false;
	}


}
