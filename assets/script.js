// store the value of the input
let city = $("#searchTerm").val();
// store api key
const apiKey = "&appid=19c14463a6e822baa9b55934cb5eda97";

let date = new Date();

$("#searchTerm").keypress(function(event) { 
	
	if (event.keyCode === 13) { 
		event.preventDefault();
		$("#searchBtn").click(); 
	} 
});
$("#searchBtn").on("click", function() {

    $('#forecastH5').addClass('show');
  
    // get the value of the input from user
    city = $("#searchTerm").val();
    
    // clear input box
    $("#searchTerm").val("");  
  
    // full url to call api
    const queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
  
    $.ajax({
      url: queryUrl,
      method: "GET"
    })
    .then(function (response){

        console.log(response)
    
        console.log(response.name)
        console.log(response.weather[0].icon)
    
        let tempF = (response.main.temp - 273.15) * 1.80 + 32;
        console.log(Math.floor(tempF))
    
        console.log(response.main.humidity)
    
        console.log(response.wind.speed)
    
        getCurrentConditions(response);
        getCurrentForecast(response);
        makeList();
    
        })
      });
    
      function makeList() {
        let listItem = $("<li>").addClass("list-group-item").text(city);
        $(".list").append(listItem);
      }