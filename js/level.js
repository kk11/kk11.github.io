/*!
 * Level - Recording Studio (link)
 * Design by André Sontag Artigas
 * Code by Kevin Katzer
 */

function init() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		center: new google.maps.LatLng(-25.3812294, -49.2216299),
		zoom: 17,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		overviewMapControl: false,
		panControl: false,
		rotateControl: false,
		scaleControl: false,
		zoomControl: false,
		streetViewControl: false,
		mapTypeControl: false,
	}

	var map = new google.maps.Map(mapCanvas,mapOptions);

	var marker = new google.maps.Marker({
		map: map,
		draggable: false,
		position: new google.maps.LatLng(-25.3812376, -49.2216068),
		title: 'Rua Calixto de Jesus, 501 - Curitiba'
	})

	var info = new google.maps.InfoWindow({
		content: 'Rua Calixto de Jesus, 501 - Curitiba'
	})

	info.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', init);