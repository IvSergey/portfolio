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





// document.body.style.overflowY ='hidden';

// const navigation = document.getElementById('navigation');
// navigation.style.overflow ='hidden';







	