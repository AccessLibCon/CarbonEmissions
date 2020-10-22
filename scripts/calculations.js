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
   //string_value = value_with_commas(value);
   txt = document.createTextNode( value );
   span.appendChild(txt);
}
function value_with_commas(value) {
    //Add commas to pring the number as 9,999,999 for example
    //Commenting out due to error in live site return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
