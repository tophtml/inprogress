
function features(choice) {
	let featureFirst = document.querySelector('.features-desc__img_first').style;
	let featureSecond = document.querySelector('.features-desc__img_second').style;
	let featureForth = document.querySelector('.features-desc__img_forth').style;
	let featureFifth = document.querySelector('.features-desc__img_fifth').style;

	let featureTextFirst = document.querySelector('.features-desc__info_first').style;
	let featureTextSecond = document.querySelector('.features-desc__info_second').style;
	let featureTextForth = document.querySelector('.features-desc__info_forth').style;
	let featureTextFifth = document.querySelector('.features-desc__info_fifth').style;
	let featureTextDefault = document.querySelector('.features-desc__text_default').style;

	let featureItemFirst = document.querySelector('.features__item_list');
	let featureItemSecond = document.querySelector('.features__item_energy');
	let featureItemForth = document.querySelector('.features__item_speed');
	let featureItemFifth = document.querySelector('.features__item_infinity');

	switch(choice) {
	case 1: 
		featureFirst.display = 'block';
		featureSecond.display = 'none';
		featureForth.display = 'none';
		featureFifth.display = 'none';

		featureTextFirst.display = 'block';
		featureTextSecond.display = 'none';
		featureTextForth.display = 'none';
		featureTextFifth.display = 'none';

		featureItemFirst.style.cursor = 'default';
		featureItemSecond.style.cursor = 'pointer';
		featureItemForth.style.cursor = 'pointer';
		featureItemFifth.style.cursor = 'pointer';

		featureItemFirst.classList.add("features__item_selected");
		featureItemSecond.classList.remove("features__item_selected");
		featureItemForth.classList.remove("features__item_selected");
		featureItemFifth.classList.remove("features__item_selected");			
		break;
	
	case 2: 
		featureFirst.display = 'none';
		featureSecond.display = 'block';
		featureForth.display = 'none';
		featureFifth.display = 'none';

		featureTextFirst.display = 'none';
		featureTextSecond.display = 'block';
		featureTextForth.display = 'none';
		featureTextFifth.display = 'none';

		featureItemFirst.style.cursor = 'pointer';
		featureItemSecond.style.cursor = 'default';
		featureItemForth.style.cursor = 'pointer';
		featureItemFifth.style.cursor = 'pointer';

		featureItemFirst.classList.remove("features__item_selected");
		featureItemSecond.classList.add("features__item_selected");
		featureItemForth.classList.remove("features__item_selected");
		featureItemFifth.classList.remove("features__item_selected");
		break;

	case 4: 
		featureFirst.display = 'none';
		featureSecond.display = 'none';
		featureForth.display = 'block';
		featureFifth.display = 'none';

		featureTextFirst.display = 'none';
		featureTextSecond.display = 'none';
		featureTextForth.display = 'block';
		featureTextFifth.display = 'none';

		featureItemFirst.style.cursor = 'pointer';
		featureItemSecond.style.cursor = 'pointer';
		featureItemForth.style.cursor = 'default';
		featureItemFifth.style.cursor = 'pointer';

		featureItemFirst.classList.remove("features__item_selected");
		featureItemSecond.classList.remove("features__item_selected");
		featureItemForth.classList.add("features__item_selected");
		featureItemFifth.classList.remove("features__item_selected");
		break;
	
	case 5: 
		featureFirst.display = 'none';
		featureSecond.display = 'none';
		featureForth.display = 'none';
		featureFifth.display = 'block';

		featureTextFirst.display = 'none';
		featureTextSecond.display = 'none';
		featureTextForth.display = 'none';
		featureTextFifth.display = 'block';

		featureItemFirst.style.cursor = 'pointer';
		featureItemSecond.style.cursor = 'pointer';
		featureItemForth.style.cursor = 'pointer';
		featureItemFifth.style.cursor = 'default';

		featureItemFirst.classList.remove("features__item_selected");
		featureItemSecond.classList.remove("features__item_selected");
		featureItemForth.classList.remove("features__item_selected");
		featureItemFifth.classList.add("features__item_selected");
		break;	

	default:
		featureTextDefault.display = 'block';
		featureTextFirst.display = 'none';
		featureTextSecond.display = 'none';
		featureTextForth.display = 'none';
		featureTextFifth.display = 'none';
		break;
	}	
}
function changeColorBike(choice) {
	let btnDescriptionBlue = document.querySelector('.description__btn_blue');
	let btnDescriptionGrey = document.querySelector('.description__btn_grey');
	let btnDescriptionYellow = document.querySelector('.description__btn_yellow');
	let linkDescription = document.querySelector('.description__link_1');
	let imgDescription = document.querySelector('.description__img_1');


	if(choice == 1) {
		btnDescriptionBlue.classList.add("description-color_selected");
		btnDescriptionGrey.classList.remove("description-color_selected");
		btnDescriptionYellow.classList.remove("description-color_selected");
		imgDescription.src = "img/2016_YZF-R1/description/decs_YZF-R1M.png";
		linkDescription.href = "img/2016_YZF-R1/description/decs_YZF-R1M.png";
	} else if (choice == 2) {
		btnDescriptionBlue.classList.remove("description-color_selected");
		btnDescriptionGrey.classList.add("description-color_selected");
		btnDescriptionYellow.classList.remove("description-color_selected");
		imgDescription.src = "img/2016_YZF-R1/description/grey.png";
		linkDescription.href = "img/2016_YZF-R1/description/grey.png";
	} else if (choice == 3) {
		btnDescriptionBlue.classList.remove("description-color_selected");
		btnDescriptionGrey.classList.remove("description-color_selected");
		btnDescriptionYellow.classList.add("description-color_selected");
		imgDescription.src = "img/2016_YZF-R1/description/yellow.png";
		linkDescription.href = "img/2016_YZF-R1/description/yellow.png";
	} 


}







