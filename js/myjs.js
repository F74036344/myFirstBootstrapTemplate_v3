
const WEBSITE_NAME = "NCKU CIP";

/* subprogram start */

function init(){
	updateEleRelatedToWebsiteName();
}

function updateEleRelatedToWebsiteName(){
	document.getElementsByTagName("TITLE")[0].innerHTML = WEBSITE_NAME;
	document.getElementById("headerTitle").innerHTML = getHeaderTitle();
	document.getElementById("subtitle1").innerHTML = getSubtitle1();
	document.getElementById("subtitle2").innerHTML = getSubtitle2();
	//document.getElementById("logo-btn").innerHTML = '<img src="img/ncku_logo.ico" id="logo-btn">' + WEBSITE_NAME;
}

function getHeaderTitle(){
	return "歡迎來到 " + WEBSITE_NAME;
}

function getSubtitle1(){
	return "國立成功大學校園智慧平台";
}

function getSubtitle2(){
	return "National Cheng Kung University Campus Intelligence Platform";
}



/* subprogram end */

/* program start */
init();


/* program end */