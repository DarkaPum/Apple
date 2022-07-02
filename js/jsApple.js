/* FUNCIÓN para el despliegue de los MENUS */

var docAppleMenu = document.getElementById("appleMenu");
var docSearch = document.getElementById("search");
var docNavBag = document.getElementById("navBag");
var docNavListBackground = document.getElementById("navList");
var docTransformIconMenu = document.getElementById("leftMenu");

function displayAppleMenu() {

	var displayAppleMenu = docAppleMenu.style.display;
	var displayListBag = docListBag.style.display;

	if (displayAppleMenu == "none" || displayAppleMenu == "") {
		docAppleMenu.style.display = "block";
		docSearch.style.display = "block";
		docNavBag.style.display = "none";
		docNavListBackground.style.background = "rgb(0, 0, 0)";
		docTransformIconMenu.classList.toggle("leftMenuOpened");
	} else {
		docAppleMenu.style.display = "none";
		docSearch.style.display = "none";
		docNavBag.style.display = "flex";
		docNavListBackground.style.background = "rgb(49, 49, 50)";
		docTransformIconMenu.classList.toggle("leftMenuOpened");
	}
	
	if (displayListBag == "block") {
		docListBag.style.display = "none";
	}
}

var docListBag = document.getElementById("listBag");

function displayListBag() {

	var displayAppleMenu = docAppleMenu.style.display;
	var displayListBag = docListBag.style.display;

	if (displayListBag == "none" || displayListBag == "") {
		docListBag.style.display = "block";
		docNavListBackground.style.background = "rgb(0, 0, 0)";
	} else {
		docListBag.style.display = "none";
		docNavListBackground.style.background = "rgb(49, 49, 50)";
	}

	if (displayAppleMenu == "block") {
		docAppleMenu.style.display = "none";
	}
}

var docSearchMenu = document.getElementById("searchMenu");
var docCancelSM = document.getElementById("cancelSM");
var docSearchInput = document.getElementById("search-input");
var docSearchInputWrapper = document.getElementById("search-input-wrapper");

function displaySearchMenu() {

	var displaySearchMenu = docSearchMenu.style.display;
	var displayCancelSM = docCancelSM.style.display;

	if (displaySearchMenu == "none" || displaySearchMenu == "") {
		docSearchMenu.style.display = "block";
		docCancelSM.style.display = "flex";
		docSearchInput.style.width = "64%";
		docSearchInput.style.left = "10px";
		docSearch.style.top = "0px";
		docSearchInputWrapper.style.padding = "15px";
	}
}

function displaySearchMenuCancel() {

	var displaySearchMenu = docSearchMenu.style.display;

	if (displaySearchMenu == "block" || displaySearchMenu == "") {
		docSearchMenu.style.display = "none";
		docCancelSM.style.display = "none";
		docSearchInput.style.width = "94%";
		docSearch.style.top = "48px";
		docSearchInputWrapper.style.padding = "0px";
	}
}

var docShowBuyUl = document.getElementById("showBuyUl");
var docServicesUl = document.getElementById("servicesUl");
var docAccountUl = document.getElementById("accountUl");
var docAppleStoreUl = document.getElementById("appleStoreUl");
var docCompanyUl = document.getElementById("companyUl");
var docEducationUl = document.getElementById("educationUl");
var docHealthUl = document.getElementById("healthUl");
var docAppleValuesUl = document.getElementById("appleValuesUl");
var docAboutUl = document.getElementById("aboutUl");

function displayFooterMenu1() {
	var displayShowBuyUl = docShowBuyUl.style.display;

	if (displayShowBuyUl == "none" || displayShowBuyUl == "") {
		docShowBuyUl.style.display = "block";
	} else {
		docShowBuyUl.style.display = "none";
	}
}

function displayFooterMenu2() {
	var displayServicesUl = docServicesUl.style.display;

	if (displayServicesUl == "none" || displayServicesUl == "") {
		docServicesUl.style.display = "block";
	} else {
		docServicesUl.style.display = "none";
	}
}

function displayFooterMenu3() {
	var displayAccountUl = docAccountUl.style.display;

	if (displayAccountUl == "none" || displayAccountUl == "") {
		docAccountUl.style.display = "block";
	} else {
		docAccountUl.style.display = "none";
	}
}

function displayFooterMenu4() {
	var displayAppleStoreUl = docAppleStoreUl.style.display;

	if (displayAppleStoreUl == "none" || displayAppleStoreUl == "") {
		docAppleStoreUl.style.display = "block";
	} else {
		docAppleStoreUl.style.display = "none";
	}
}

function displayFooterMenu5() {
	var displayCompanyUl = docCompanyUl.style.display;

	if (displayCompanyUl == "none" || displayCompanyUl == "") {
		docCompanyUl.style.display = "block";
	} else {
		docCompanyUl.style.display = "none";
	}
}

function displayFooterMenu6() {
	var displayEducationUl = docEducationUl.style.display;

	if (displayEducationUl == "none" || displayEducationUl == "") {
		docEducationUl.style.display = "block";
	} else {
		docEducationUl.style.display = "none";
	}
}

function displayFooterMenu7() {
	var displayHealthUl = docHealthUl.style.display;

	if (displayHealthUl == "none" || displayHealthUl == "") {
		docHealthUl.style.display = "block";
	} else {
		docHealthUl.style.display = "none";
	}
}

function displayFooterMenu8() {
	var displayAppleValuesUl = docAppleValuesUl.style.display;

	if (displayAppleValuesUl == "none" || displayAppleValuesUl == "") {
		docAppleValuesUl.style.display = "block";
	} else {
		docAppleValuesUl.style.display = "none";
	}
}

function displayFooterMenu9() {
	var displayAboutUl = docAboutUl.style.display;

	if (displayAboutUl == "none" || displayAboutUl == "") {
		docAboutUl.style.display = "block";
	} else {
		docAboutUl.style.display = "none";
	}
}
