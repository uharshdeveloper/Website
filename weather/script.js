 
	



const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cc756e0339mshb2b14b500b1ca1ep15b3b1jsnfd2bdfd35e8e',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};

fetch(' https://weather-api138.p.rapidapi.com/weather?city_name=jaipur'
	
	
	
	, options)
	.then(response => response.json())
	.then((response)=> {console.log(response)
		document.getElementById("temp").innerText=response.main.temp
		document.getElementById("temp_max").innerText=response.main.temp_max
		document.getElementById("temp_min").innerText=response.main.temp_min
		document.getElementById("humidity").innerText=response.main.humidity
		document.getElementById("feels_like").innerText=response.main.feels_like

		document.getElementById("speed").innerText=response.wind.speed
		document.getElementById("deg").innerText=response.wind.deg
		document.getElementById("visible").innerText=response.visibility


		document.getElementById("lat").innerText=response.coord.lat
		document.getElementById("lon").innerText=response.coord.lon
		document.getElementById("name").innerText=response.name
		document.getElementById("country").innerText=response.sys.country
	}
	)
	.catch(err => console.error(err))

