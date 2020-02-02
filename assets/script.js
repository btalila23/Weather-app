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