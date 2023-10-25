mapboxgl.accessToken = 'pk.eyJ1Ijoid2l0eXZpcyIsImEiOiJjajl4MGo0OWowczk4MnFtZHVob3I0MTdnIn0.KHhjbfQIuxBcoOsukPTldQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [0, 0],
    maxBounds: [[-180, -85], [180, 85]],
    zoom: 1
});

map.on('load', function () {
	console.log("hello")
    let sphere_1 = document.getElementById("sphere");;
    sphere_1.setAttribute("src", "images/Test AR.jpg");
	let thankyou = document.getElementById("thankyou");
	thankyou.setAttribute("src", "images/MAM-ThankYou-01.png");

});