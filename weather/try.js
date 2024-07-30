const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cc756e0339mshb2b14b500b1ca1ep15b3b1jsnfd2bdfd35e8e',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};

fetch(' https://weather-api138.p.rapidapi.com/weather?city_name=jaipur ', options)
	.then(response => response.json())
	.then((response)=> {
         console.log(response)
    temp.innerHTML =response.main.temp
         


	}
	)
	.catch(err => console.error(err))