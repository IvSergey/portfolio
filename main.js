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


// gamb.addEventListener( "DOMMouseScroll", elem.onmousewheel = function( e ) {

//        e.preventDefault();

//     }, false );

 





	

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









// overlay



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

// $(function () {

// 	var moveSlide = function (container, slideNum) {
// 		items = container.find('.slider__item'),
// 		activeSlide = items.filter('.active'),
// 		reqItem = items.eq(slideNum),
// 		reqIndex = reqItem.index(),
// 		list = container.find('.slider__list'),
// 		duration = 500;

// 	if (reqItem.length) {
// 		list.animate({
// 			'left' : -reqIndex * 100 + '%'
// 		}, duration, function () {
// 			activeSlide.removeClass('active');
// 			reqItem.addClass ('active');
// 		});
		
// 		}

// 	}

// 	$('.burger-slide__btn').on('click', function(e){
// 		e.preventDefault();

// 		var $this = $(this),
// 			container = $this.closest ('.slider'),
// 			items = $('.slider__item', container),
// 			activeItem = items.filter('.active'),
// 			nextItem = activeItem.next(),
// 			prevItem = activeItem.prev();

// 		if ($this.hasClass('burger-slide__btn-next')){

// 			if(nextItem.length) {
// 				moveSlide(container, nextItem.index());
// 			} else{
// 				moveSlide(container, items.first().index());
// 			}

			

// 		} else{
// 			if(prevItem.length) {
// 				moveSlide(container, prevItem.index());
// 			} else{
// 				moveSlide(container, items.last().index());
// 			}
			

// 		}

		
// 	});


// });

$(document).ready(function(){
      $('.slider').bxSlider ({

      	pager: false
      });
      	
	});



let openMenu = document.getElementsByClassName('menu__bg');
let openText = document.getElementsByClassName('menu__text');

for (let i = 0; i < openMenu.length; i++) {
    openMenu[i].addEventListener('click', function () {
        for (let y = 0; y < openText.length; y++) {
            let activeClass = openText[i].classList.contains('menu__text-active');
            if (!activeClass) {
                for (let x = 0; x < openText.length; x++) {
                    openText[x].classList.remove('menu__text-active');
                    openText[i].classList.add('menu__text-active');
                }
            }
            if (activeClass) {
                openText[i].classList.remove('menu__text-active');
            }
             
        }
    });
}




// 	let openMenu = document.getElementsByClassName('menu__bg');
// 	let openText = document.getElementsByClassName('menu__text');
// 	for(let i = 0; i < openMenu.length; i++){
// 		openMenu[i].addEventListener('click', function () {
// 			for(let j = 0; j < openText.length; j++){
// 				openText[j].classList.remove('menu__text-active');
// 				if (i === j){
// 					openText[j].classList.add('menu__text-active');
// 				} 
// 			}
// 		});
// }; 


$('#order-form').on('submit', submitForm);

function submitForm (ev) {
    ev.preventDefault();
    
    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');

    ajaxForm(form).done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        
        if (status === 'OK') {
            form.append('<p class="success">' + mes + '</p>');
        } else{
            form.append('<p class="error">' + mes + '</p>');
        }
    }).fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

};

// Универсальная функция для работы с формами
var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr('action');
    
    return $.ajax({
        type: 'POST',
        url: url,
        dataType : 'JSON',
        data: data
    })
};

// onePageScroll

const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const setActiveMenuItem = itemEq => {
	$('.paginations__item').eq(itemEq).addClass('active')
	.siblings().removeClass('active')
}



const performTransition = sectionEq => {
	const position = `${sectionEq * -100}%`;



	if (inScroll) return;

	inScroll = true;
	sections.eq(sectionEq).addClass('active')
		.siblings().removeClass('active');

	display.css({
		'transform' : `translate(0, ${position})`,
		'-webkit-transform' : `translate(0, ${position})`
	});

	setTimeout(() => {
		inScroll = false;
		setActiveMenuItem(sectionEq);
	}, 1300); //продожительность анимации +300 секунд, для невилирования инерции

	
	
};

const scrollToSection = direction => {
	const activeSection = sections.filter(".active");
	const nextSection = activeSection.next();
	const prevSection = activeSection.prev();


	if (direction === "up" && prevSection.length) {
		performTransition(prevSection.index());
	}

	if (direction === "down" && nextSection.length) {
		performTransition(nextSection.index());
	}

};



$(document).on({
	wheel: e => {
		const deltaY = e.originalEvent.deltaY;
		const direction = deltaY > 0 
		? 'down' 
		: 'up'
		
		scrollToSection(direction);
	},
	keydown: e=> {
		switch (e.keyCode){
			case 40:
			 scrollToSection('down');
			break;

			case 38:
			 scrollToSection('up');
			break;
		}
	},
	touchmove: e => e.preventDefault()

});

$('[data-scroll-to]').on('click', e => {

	e.preventDefault();

	const target = parseInt($(e.currentTarget).attr('data-scroll-to'));
		
	performTransition(target);
})

if (isMobile) {
	$(document).swipe( {
	    
	    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
		    	// плагин возвращает фактическое движение
		    	// необходимо переназначение
		    	const scrollDirection = direction === 'down' ? 'up' : 'down';

		      	scrollToSection(scrollDirection); 
   		}
	});
		
}




// $(document).on('wheel', e => {
// 	console.log(e);
// })

