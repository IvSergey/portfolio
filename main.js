ymaps.ready(init);

var placemarks = [
	{
		latitude: 59.97,
		longitude: 30.31,
		

	},
	{
		latitude: 59.94,
		longitude: 30.38,
		
	},
	{
		latitude: 59.87,
		longitude: 30.31,
		
	},
	{
		latitude: 59.91,
		longitude: 30.48,
		
	}
];
	


function init() {
	var map = new ymaps.Map('map',{
		center: [59.94, 30.32],
		zoom: 11,
		controls:['zoomControl'],
		behaviors:['drag']
		
	});

	placemarks.forEach(function(obj) {
		var placemark = new ymaps.Placemark([obj.latitude, obj.longitude],{

		    },
		    {
		    	iconLayout:'default#image',
				iconImageHref: 'img/icons/map-marker.svg',
				iconImageSize:[46,57]
		    });

		
		map.geoObjects.add(placemark);

	});
}

// let gamb = document.getElementById("gamb-menu");



// gamb.addEventListener("click", function(e) { 
// 	var header__navigation--active = document.getElementById("navigation");
// 	if (header__navigation--active.style.display = 'flex') {

// 		gamb__btn--active.style.display = 'none';

// 	}


//  });

let gamb = document.getElementById('gamb-menu');

gamb.addEventListener('click', function() {
    if (navigation.classList.contains('header__navigation--active')) {
    	document.body.style.overflowY ='auto';
    	navigation.classList.remove('header__navigation--active');
        gamb.classList.remove('gamb__btn--active')
    }
    else {
    	document.body.style.overflowY ='hidden';
        navigation.classList.add('header__navigation--active');
        gamb.classList.add('gamb__btn--active')
    }
});

 
    // navigation.addEventListener( "wheel",function( e ) {

    //    e.preventDefault();

    // });





	

	let current;
	let accordeon = document.getElementById('accordeon');
	accordeon.addEventListener('click', function (e) {
	let target = e.target;
	if(!target.classList.contains('team__name')){
		return;	

	};
		
	if (target.parentNode.classList.contains('team__accordeon-inner--active')) {
		current = null;
		target.parentNode.classList.toggle('team__accordeon-inner--active');
	} else {
		if (current) {
			current.parentNode.classList.toggle('team__accordeon-inner--active')
		}
		current = target;
		current.parentNode.classList.toggle('team__accordeon-inner--active');
	}
	
	});






//gorizont accordion
// let currentMenu;
// let openMenu = document.getElementById("gorizont-accordeon");
// openMenu.addEventListener("click", function (e) {
// 	let target = e.target;
	// if(!target.classList.contains('menu__bg')) {
	// 	return;
	// }

	// if (target.nextElementSibling.classList.contains('menu__text-active')) {
	// 	current = null;
	// 	target.nextElementSibling.classList.toggle('menu__text-active');
	// } else {
	// 	if (current) {
	// 		current.nextElementSibling.classList.toggle('menu__text-active')
	// 	}
	// 	current = target;
	// 	current.nextElementSibling.classList.toggle('menu__text-active');
	// }


// 	if(target.classList.contains('menu__bg')) {
// 		if (target.nextElementSibling.classList.contains('menu__text-active')) {
// 		current = null;
// 		target.nextElementSibling.classList.toggle('menu__text-active');
// 		} else {
// 			if (current) {
// 				current.nextElementSibling.classList.toggle('menu__text-active')
// 			}
// 			current = target;
// 			current.nextElementSibling.classList.toggle('menu__text-active');
// 		}
// 	} else if (target.classList.contains('menu__subtitle')) {
// 		if (target.parentNode.nextElementSibling.classList.contains('menu__text-active')) {
// 		current = null;
// 		target.parentNode.nextElementSibling.classList.toggle('menu__text-active');
// 		} else {
// 			if (current) {
// 				target.parentNode.nextElementSibling.classList.toggle('menu__text-active')
// 			}
// 			current = target;
// 			target.parentNode.nextElementSibling.classList.toggle('menu__text-active');
// 		}
// 	} else {
// 		return;
// 	}
// });


// overlay

// let openOverlay = document.getElementById('overlay');

// openOverlay.addEventListener("click", function(e) {
// 	let target = e.target;

// 	if(!target.classList.contains('reviews-popup')) {
// 		return;
// 	}

// 	const containerElement = document.createElement("reviews-popup");
//  	containerElement.classList.add("reviews-popup--active");

//  	// document.body.appendChild(containerElement);

// 	console.log("----")
// })

$(()=> {
  var reviewsPopup = $(".reviews-popup"),
        reviewsName = $(".reviews-popup__name", reviewsPopup),
        reviewsText = $(".reviews-popup__text", reviewsPopup),
        buttons = $(".btn__more"),
        close = $(".reviews-popup__close");
  var name, text;

  buttons.on("click",e => {
    var target = $(e.currentTarget);
    name = target.siblings().first().text();
    text = target.siblings().eq(1).text();
    
    
  });
  
  var showPopup = function() {
  	
    reviewsName.text(name);
    reviewsText.text(text);
    reviewsPopup.toggleClass("reviews-popup--active");
 
  };

  buttons.on("click", showPopup);
   close.on("click", showPopup);
  
  

});


// slider

$(function () {

	var moveSlide = function (container, slideNum) {
		items = container.find('.slider__item'),
		activeSlide = items.filter('.active'),
		reqItem = items.eq(slideNum),
		reqIndex = reqItem.index(),
		list = container.find('.slider__list'),
		duration = 500;

	if (reqItem.length) {
		list.animate({
			'left' : -reqIndex * 100 + '%'
		}, duration, function () {
			activeSlide.removeClass('active');
			reqItem.addClass ('active');
		});
		
		}

	}

	$('.burger-slide__btn').on('click', function(e){
		e.preventDefault();

		var $this = $(this),
			container = $this.closest ('.slider'),
			items = $('.slider__item', container),
			activeItem = items.filter('.active'),
			nextItem = activeItem.next(),
			prevItem = activeItem.prev();

		if ($this.hasClass('burger-slide__btn-next')){

			if(nextItem.length) {
				moveSlide(container, nextItem.index());
			} else{
				moveSlide(container, items.first().index());
			}

			

		} else{
			if(prevItem.length) {
				moveSlide(container, prevItem.index());
			} else{
				moveSlide(container, items.last().index());
			}
			

		}

		
	});


});


// let openMenu = document.getElementsByClassName('menu__bg');
// let openText = document.getElementsByClassName('menu__text');
// for(let i = 0; i < openMenu.length; i++){
// 	openMenu[i].addEventListener('click', function (e) {
// 		e.target === openMenu[i];
// 		for(let j = 0; j < openText.length; j++){
// 			console.log(openMenu[i],openText[j])
// 			if (openMenu[i] === openText[j]){
// 				console.log(i,j)
// 			} 
// 	// if (openText[j].classList.contains('menu__text--active')){
// 	// 	openText[j].classList.remove('menu__text--active');
		
	
// 	// }else (openText[j].classList.add('menu__text--active'))
// }
// })};

let openMenu = document.getElementsByClassName('menu__bg');
let openText = document.getElementsByClassName('menu__text');
for(let i = 0; i < openMenu.length; i++){
openMenu[i].addEventListener('click', function () {
let target = openMenu[i];
for(let j = 0; j < openText.length; j++){

if (i === j){
console.log(openText[j])
} 
if (openText[j].classList.contains('menu__text--active')){
openText[j].classList.remove('menu__text--active');


}else (openText[j].classList.add('menu__text--active'))
}
})};