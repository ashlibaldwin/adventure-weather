$(document).ready(function(){
  var lat;
  var lon;
    $.getJSON("https://ip-api.com/json", function(data2){
    lat = data2.lat;
    lon = data2.lon;
   api= "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&APPID=9c1eb6cdcf29dc3879abecee8f45c7ac";
      
var currentTime = new Date().getHours();
if (currentTime > 19) {
  $("body").addClass('night');
}
else if (currentTime < 19) {
  $("body").addClass('day');
}
 
 $.getJSON(api, function(data){
    
  var city = data.city.name;
   
   var temp = Math.floor(data.list[0].main.temp);
   var cTemp = Math.floor((parseInt(temp) - 32) * .56);
 
   var icon = data.list[0].weather[0].icon;
   var iconImg = "http://openweathermap.org/img/w/" +icon + ".png";
   $(".forecast").text(city);
   $(".temp").text(temp);
   
   $("#celcius").click(function(){
     $(".temp").html(cTemp);
     $("#fahrenheit").attr('aria-pressed', 'false')
    $("#fahrenheit").removeClass("active")
     });
   $("#fahrenheit").click(function(){
      $(".temp").html(temp);
      $("#celcius").attr('aria-pressed', 'false')
    $("#celcius").removeClass("active")
   });
   
    $(".icon").attr("src",iconImg);
   
  });

  });
});