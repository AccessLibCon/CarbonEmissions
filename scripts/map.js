	var mymap = L.map('mapid').setView([48.8,  -103.19740715], 3);

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
	for(var key in locationsJSON) {
       L.marker([locationsJSON[key]["lat"], locationsJSON[key]["lon"]]).addTo(mymap);
       total_distance += locationsJSON[key]["distance"]*locationsJSON[key]["count"];
       total_participants += locationsJSON[key]["count"];
    }

	var circle = L.circle([49.2608724, -123.1139529], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: total_distance/total_participants
    }).addTo(mymap);
