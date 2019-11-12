//OPEN SITE
let bannerBtn = document.querySelector('.banner__btn');
let mainSite = document.querySelector('.open-site');
bannerBtn.onclick = openSite;

function openSite() {
	mainSite.style.display = 'block';
	mainSite.classList.add('modal-overlay-in');
}

//SLIDER WORK
let overlaySlider = document.querySelector('.overlay-slider');
let modalSliderImg = document.querySelector('.work-carousel');
let modalSliderClick = document.querySelector('.work__img-box');
let modalBtnLeft = document.querySelector('.modal-work__btn_left');
let modalBtnRight = document.querySelector('.modal-work__btn_right');
let left = 0;

modalBtnLeft.onclick = moveSliderLeft;
modalBtnRight.onclick = moveSliderRight;
modalSliderClick.onclick = showSlider;

function showSlider() {
	overlaySlider.classList.remove('modal-overlay-out');
	overlaySlider.style.display = 'block';

	if (showSlider) {
		overlaySlider.classList.add('modal-overlay-in');
	}
}

function moveSliderLeft() {
	left = left - 420;
	modalBtnRight.classList.add('btn-active_right');
	if (left <= -3360) {
		left = -3360;
		modalBtnLeft.classList.remove('btn-active_left');
		modalBtnLeft.classList.add('btn-inactive_left');
	}
	modalSliderImg.style.left = left + 'px';
	
}
function moveSliderRight() {
	modalBtnLeft.classList.add('btn-active_left');
	left = left + 420;
	if (left > 0) {
		left = 0;
	}
	modalSliderImg.style.left = left + 'px';
	if(left == 0) {
		modalBtnRight.classList.remove('btn-active_right');
		modalBtnRight.classList.add('btn-inactive_right');
	}	
}

//FORM VALIDATION

function RegEx(regex,input,helpText,helpMessage) {
	if(!regex.test(input)) {
		if(helpText != null)
			helpText.innerHTML = helpMessage;
			return false;
	}
	else {
		if(helpText != null) 
			helpText.innerHTML = "";
			return true;
	}
}

//CONTACTS FORM

let overlayForm = document.querySelector('.overlay-form');
let contactsMessage = document.getElementById('js-message');
let contactsMessageHelp = document.getElementById('js-message-help');
let contactsEmail = document.getElementById('js-email');
let contactsEmailHelp = document.getElementById('js-email-help');
let contactsBtn = document.querySelector('.input-text__btn');

contactsMessage.onblur = helpContactsMessage;
contactsEmail.onblur = helpContactsEmail;

function helpContactsMessage(inputField, helpText) {
	return RegEx(/.+/,contactsMessage.value,contactsMessageHelp,"Please put some text");
}

function helpContactsEmail(inputField, helpText) {
	return RegEx(/^.+\@.+\.\w{2,3}$/,contactsEmail.value,contactsEmailHelp, "Please use correct email");
}

function sendContactsForm(form) {
	if (helpContactsMessage(form['js-message'], form['js-message-help']) && helpContactsEmail(form['js-email'], form['js-email-help'])) {
		form.submit();
	}
	else {
		overlayForm.classList.remove('modal-overlay-out');
		overlayForm.classList.add('modal-overlay-in');
		overlayForm.style.display = 'block';
	}
}
overlayForm.onclick = function() {
	overlayForm.classList.remove('modal-overlay-in');
	overlayForm.classList.add('modal-overlay-out');
}

//IFRAME MAP
let overlayMap = document.querySelector('.overlay-map');
document.querySelector('.contacts-map__img').onclick = showMap;
document.querySelector('.footer-address__text').onclick = showMap;

function showMap() {
	overlayMap.classList.remove('modal-overlay-out');
	overlayMap.style.display = 'block';
	if (showMap) {
		overlayMap.classList.add('modal-overlay-in');
	}
}


//CLOSE OVERLAY
overlayMap.onclick = function() {
	overlayMap.classList.remove('modal-overlay-in');
	if (overlayMap) {
		overlayMap.classList.add('modal-overlay-out');
	}
}
let overlaySliderClose = document.querySelector('.overlay-slider__btn');
overlaySliderClose.onclick = function() {
	overlaySlider.classList.remove('modal-overlay-in');

	if (overlaySliderClose) {
		overlaySlider.classList.add('modal-overlay-out');
	}
}