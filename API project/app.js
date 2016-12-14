var bodyImage = document.getElementById("body");
var latQuery = document.getElementById("lat");
var lonQuery = document.getElementById("lon");
var button = document.getElementById("getdata");
var div = document.getElementById("results");

var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        bodyImage.style.backgroundImage = "url('" + data.hdurl + "')";
        bodyImage.style.backgroundSize = "cover";
    });
    xhr.open("GET", 'https://api.nasa.gov/planetary/apod?hd=true&api_key=9b98fYcT5MLfS1lwX3lK8s89rxjLcUoMvsNdmvO1');
    xhr.send();

// Trying to add in the address
/* var place = button.addEventListener("click", function() {
    
    var urlBase = "//maps.googleapis.com/maps/api/geocode/json?";
    var urlEnd = "latlng=latQuery,lonQuery";
    
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", callback);
    xhr.open("GET", urlBase + urlEnd);
    xhr.send();
    
    function callback() {
        var data = JSON.parse(xhr.responseText);
        var htmlString = "";
        
        htmlString += 'formatted_address';
        
        div.innerHTML = htmlString;
    }
*/    
button.addEventListener("click", function() {
 
  if (latQuery.value < -90 || latQuery.value > 90) {
        alert("Choose a latitude between -90 and 90.");
        return;
}   
  if (lonQuery.value < -180 || lonQuery.value > 180) {
        alert("Choose a lonQuery between -180 and 180.");
        return;
} 
    
    var urlBase = "//api.nasa.gov/planetary/earth/imagery?";
    var urlEnd = "api_key=9b98fYcT5MLfS1lwX3lK8s89rxjLcUoMvsNdmvO1";
    
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", callback);
    xhr.open("GET", urlBase + latQuery.value +"&" + lonQuery.value +"&" + urlEnd);
    xhr.send();
    
    function callback() {
        var data = JSON.parse(xhr.responseText);
        var htmlString = "";

// would put address in the string instead of lonQuery,latQuery        
        htmlString += '<h3>Your Earth at your coordinates in ' + lonQuery  + ',' + latQuery + '</h3>'
        htmlString += '<p><img src="' + data.url + '"</img> ' + '</p>'
        htmlString += '<p>On this date: ' + data.date + '</p>'
        
        div.innerHTML = htmlString;
    }
});