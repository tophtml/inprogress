let modalText = document.querySelector('.overlay');
let popup = document.querySelector('.modal-main');
let modalMessage = document.querySelector('.modal-main__text').style;
let formMessage = document.querySelector('.modal-main__form').style;

function openModal() {
	modalText.classList.add('show_overlay');
	modalMessage.display = "block";
	formMessage.display = "none";
}
function removeModal() {
	let messageForm = document.querySelector('.contacts-form__message');
	modalText.classList.remove('show_overlay');
}

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
   modalText.classList.remove('show_overlay');
  }
})

function beginningOpen(choice) {
	let buttonFirst = document.querySelector('.beginning__btn_first').style;
	let buttonSecond = document.querySelector('.beginning__btn_second').style;
	let buttonThird = document.querySelector('.beginning__btn_third').style;

	let contentFirst = document.querySelector('.beginning-box_first').style;
	let contentSecond = document.querySelector('.beginning-box_second').style;
	let contentThird = document.querySelector('.beginning-box_third').style;

	if (choice == 1) {
		contentFirst.display = "block";	
		contentSecond.display = "none";
		contentThird.display = "none";
		buttonFirst.background = "transparent";
		buttonSecond.background = "#ffffff";
		buttonThird.background = "#ffffff";
		buttonFirst.cursor = "default";
		buttonSecond.cursor = "pointer";
		buttonThird.cursor = "pointer";

	}	else if (choice == 2) {
		contentFirst.display = "none";	
		contentSecond.display = "block";
		contentThird.display = "none";
		buttonFirst.background = "#ffffff";
		buttonSecond.background = "transparent";
		buttonThird.background = "#ffffff";
		buttonFirst.cursor = "pointer";
		buttonSecond.cursor = "default";
		buttonThird.cursor = "pointer";
	}	else if (choice == 3) {
		contentFirst.display = "none";	
		contentSecond.display = "none";
		contentThird.display = "block";
		buttonFirst.background = "#ffffff";
		buttonSecond.background = "#ffffff";
		buttonThird.background = "transparent";
		buttonFirst.cursor = "pointer";
		buttonSecond.cursor = "pointer";
		buttonThird.cursor = "default";	
	}
}

function playAlbum(choice) {
	let iframeAlbumFirst = document.querySelector('.discography-data__iframe_first').style;
	let iframeAlbumSecond = document.querySelector('.discography-data__iframe_second').style;
	let iframeAlbumThird = document.querySelector('.discography-data__iframe_third').style;
	let iframeAlbumForth = document.querySelector('.discography-data__iframe_first-smalldev').style;
	let iframeAlbumFifth = document.querySelector('.discography-data__iframe_second-smalldev').style;
	let iframeAlbumSixth = document.querySelector('.discography-data__iframe_third-smalldev').style;

 if (choice == 1) {
 	iframeAlbumFirst.display = "block";
	iframeAlbumSecond.display = "none";	
	iframeAlbumThird.display = "none";
 }
 else if (choice == 2) {
 	iframeAlbumFirst.display = "none";
	iframeAlbumSecond.display = "block";
	iframeAlbumThird.display = "none";
 }
 else if (choice == 3) {
 	iframeAlbumFirst.display = "none";
	iframeAlbumSecond.display = "none";
	iframeAlbumThird.display = "block";
 } else if (choice == 4) {
 	iframeAlbumForth.display = "block";
	iframeAlbumFifth.display = "none";	
	iframeAlbumSixth.display = "none";
 } else if (choice == 5) {
 	iframeAlbumForth.display = "none";
	iframeAlbumFifth.display = "block";	
	iframeAlbumSixth.display = "none";
 } else if (choice == 6) {
 	iframeAlbumForth.display = "none";
	iframeAlbumFifth.display = "none";	
	iframeAlbumSixth.display = "block";
 }
}

function showVideo(choice) {
	let videoFirst = document.querySelector('.compositions-img__video_first').style;
	let posterFirst = document.querySelector('.compositions-img__poster_first').style;

	let videoSecond = document.querySelector('.compositions-img__video_second').style;
	let posterSecond = document.querySelector('.compositions-img__poster_second').style;

	let videoThird = document.querySelector('.compositions-img__video_third').style;
	let posterThird = document.querySelector('.compositions-img__poster_third').style;
	
	switch(choice) {
		case 1:
		posterFirst.display = "none";
		videoFirst.display = "block";
		break;
		case 2:
		posterSecond.display = "none";
		videoSecond.display = "block";
		break;
		case 3:
		posterThird.display = "none";
		videoThird.display = "block";
		break;
	}
}

function sendForm() {
	let nameForm = document.querySelector('.contacts-form__text').value;
	let emailForm = document.querySelector('.contacts-form__email').value;
	let messageForm = document.querySelector('.contacts-form__message').value;

	if(nameForm == "" || emailForm == "" || messageForm == "") {
		modalText.classList.add('show_overlay');
		modalMessage.display = "none";
		formMessage.display = "block";
	} else {
		formMessage.display = "none";
		modalMessage.display = "block";
		modalText.classList.add('show_overlay');	
	}
}

let hamburgerMenu = document.querySelector('.overlay-hamburger');

function openMenu() {
	hamburgerMenu.classList.toggle('show_menu');
}

$(function(){
	$('.history-carousel-box').slick({
   	slidesToShow: 3,
  	slidesToScroll: 1,
  	centerMode: true,
	});
});

var sld = function() {
  if ($(window).width() < 768) {

   $('.history-carousel-box').slick({
   	slidesToShow: 1,
  	slidesToScroll: 1,
  	centerMode: true,
	});
  } 
};
sld();
$(window).resize(sld);

$('.hamburger').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('hamburger__decor_active');
});