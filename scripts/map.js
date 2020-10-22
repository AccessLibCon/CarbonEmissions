function  prepareMap(mapid, locations, center_lat, center_lon) {

    var mymap = L.map(mapid).setView([48.8,  -103.19740715], 3);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
    }).addTo(mymap);
    

    total_distance = 0;
    total_participants = 0;
	for(var key in locations) {
       L.marker([locations[key]["lat"], locations[key]["lon"]]).addTo(mymap);
       total_distance += locations[key]["distance"]*locations[key]["count"];
       total_participants += locations[key]["count"];
    }

	var circle = L.circle([center_lat, center_lon], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: total_distance/total_participants
    }).addTo(mymap);

}
function calculateDistance(year, locations) {
   var total_distance = 0;
   var total_participants = 0;
   var average = 0;
   for(var key in locations) {
       total_distance += locations[key]["distance"]*locations[key]["count"];
       total_participants += locations[key]["count"];
    }
   average = Math.round(total_distance / total_participants);

   displayCalculation("average", year, average);
   displayCalculation("total", year, total_distance);
}
function displayCalculation(id, year, value) {
    //Display the calculation in the HTML element with id = "idYYYY" e.g. "total2019"
   span = document.getElementById( id + year )
   string_value = value_with_commas(value);
   txt = document.createTextNode( string_value );
   span.appendChild(txt);
}
function value_with_commas(value) {
    //Add commas to pring the number as 9,999,999 for example
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
