
const temp = document.querySelector("#temp");
const tempMin = document.querySelector("#tempMin");
const tempMax = document.querySelector("#tempMax");
const feelsLike = document.querySelector("#feelsLike");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#windSpeed");
const pressure = document.querySelector("#pressure");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");

const city = document.querySelector("#city");
const submit = document.querySelector("#submit");
const city_name_update = document.querySelector("#city_name_update")


async function fetchAPI(city_name){
    city_name_update.innerHTML = city_name
    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city_name}`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3878d682a7msh757bc346d9d911dp106f61jsnce8460a62c69',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
}; 
    try {
        const response = await fetch(url, options);
        const weatherData  = await response.json();
             
        // // windDegree.innerHTML = weatherData.wind.deg;
        temp.innerHTML = (weatherData.main.temp - 273.15).toFixed(2) + "°C";
        tempMin.innerHTML = (weatherData.main.temp_min - 273.15).toFixed(2) + "°C";
        tempMax.innerHTML = (weatherData.main.temp_max - 273.15).toFixed(2) + "°C";
        feelsLike.innerHTML = (weatherData.main.feels_like - 273.15).toFixed(2) + "°C";
        humidity.innerHTML = weatherData.main.humidity + "%";
        windSpeed.innerHTML = weatherData.wind.speed + " m/s";
        pressure.innerHTML = weatherData.main.pressure + " hPa";
        sunrise.innerHTML = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
        sunset.innerHTML = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();


    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener("click",()=>{
    fetchAPI(city.value)
})
fetchAPI("Delhi")




async function fetchAPI_for_mum(city_name){

    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city_name}`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3878d682a7msh757bc346d9d911dp106f61jsnce8460a62c69',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
}; 
    try {
        const response = await fetch(url, options);
        const weatherData  = await response.json();
             
        // // windDegree.innerHTML = weatherData.wind.deg;
        Mumbai_temp.innerHTML = (weatherData.main.temp - 273.15).toFixed(2) + "°C";
        Mumbai_Humidity.innerHTML = weatherData.main.humidity + "%";
        Mumbai_Wind.innerHTML = weatherData.wind.speed + " m/s";
        Mumbai_Pressure.innerHTML = weatherData.main.pressure + " hPa";
        


    } catch (error) {
        console.error(error);
    }
}



fetchAPI_for_mum("Mumbai")


async function fetchAPI_for_Bengaluru(city_name){

    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city_name}`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3878d682a7msh757bc346d9d911dp106f61jsnce8460a62c69',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
}; 
    try {
        const response = await fetch(url, options);
        const weatherData  = await response.json();
             
        // // windDegree.innerHTML = weatherData.wind.deg;
        Bengaluru_temp.innerHTML = (weatherData.main.temp - 273.15).toFixed(2) + "°C";
        Bengaluru_Humidity.innerHTML = weatherData.main.humidity + "%";
        Bengaluru_Wind.innerHTML = weatherData.wind.speed + " m/s";
        Bengaluru_Pressure.innerHTML = weatherData.main.pressure + " hPa";
        


    } catch (error) {
        console.error(error);
    }
}



fetchAPI_for_Bengaluru("Bengaluru")


async function fetchAPI_for_New_York (city_name){

    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city_name}`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3878d682a7msh757bc346d9d911dp106f61jsnce8460a62c69',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
}; 
    try {
        const response = await fetch(url, options);
        const weatherData  = await response.json();
             
        // // windDegree.innerHTML = weatherData.wind.deg;
        New_York_temp.innerHTML = (weatherData.main.temp - 273.15).toFixed(2) + "°C";
        New_York_Humidity.innerHTML = weatherData.main.humidity + "%";
        New_York_Wind.innerHTML = weatherData.wind.speed + " m/s";
        New_York_Pressure.innerHTML = weatherData.main.pressure + " hPa";
        


    } catch (error) {
        console.error(error);
    }
}



fetchAPI_for_New_York("New York")


async function fetchAPI_for_Toronto(city_name){

    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city_name}`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3878d682a7msh757bc346d9d911dp106f61jsnce8460a62c69',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
}; 
    try {
        const response = await fetch(url, options);
        const weatherData  = await response.json();
             
        // // windDegree.innerHTML = weatherData.wind.deg;
        Toronto_temp.innerHTML = (weatherData.main.temp - 273.15).toFixed(2) + "°C";
        Toronto_Humidity.innerHTML = weatherData.main.humidity + "%";
        Toronto_Wind.innerHTML = weatherData.wind.speed + " m/s";
        Toronto_Pressure.innerHTML = weatherData.main.pressure + " hPa";
        


    } catch (error) {
        console.error(error);
    }
}



fetchAPI_for_Toronto("Toronto")


async function fetchAPI_for_London(city_name){

    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city_name}`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3878d682a7msh757bc346d9d911dp106f61jsnce8460a62c69',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
}; 
    try {
        const response = await fetch(url, options);
        const weatherData  = await response.json();
             
        // // windDegree.innerHTML = weatherData.wind.deg;
        London_temp.innerHTML = (weatherData.main.temp - 273.15).toFixed(2) + "°C";
        London_Humidity.innerHTML = weatherData.main.humidity + "%";
        London_Wind.innerHTML = weatherData.wind.speed + " m/s";
        London_Pressure.innerHTML = weatherData.main.pressure + " hPa";
        


    } catch (error) {
        console.error(error);
    }
}



fetchAPI_for_London("London")



// const cities = [
//     { name: "Mumbai", temp: "#Mumbai_temp", humidity: "#Mumbai_Humidity", wind: "#Mumbai_Wind", pressure: "#Mumbai_Pressure" },
//     { name: "Bengaluru", temp: "#Bengaluru_temp", humidity: "#Bengaluru_Humidity", wind: "#Bengaluru_Wind", pressure: "#Bengaluru_Pressure" },
//     { name: "New York", temp: "#New_York_temp", humidity: "#New_York_Humidity", wind: "#New_York_Wind", pressure: "#New_York_Pressure" },
//     { name: "Toronto", temp: "#Toronto_temp", humidity: "#Toronto_Humidity", wind: "#Toronto_Wind", pressure: "#Toronto_Pressure" },
//     { name: "London", temp: "#London_temp", humidity: "#London_Humidity", wind: "#London_Wind", pressure: "#London_Pressure" }
// ];

// async function fetchAPI(city_name, selectors) {
//     const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city_name}`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '3878d682a7msh757bc346d9d911dp106f61jsnce8460a62c69',
//             'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const weatherData = await response.json();

//         document.querySelector(selectors.temp).innerHTML = (weatherData.main.temp - 273.15).toFixed(2) + "°C";
//         document.querySelector(selectors.humidity).innerHTML = weatherData.main.humidity + "%";
//         document.querySelector(selectors.wind).innerHTML = weatherData.wind.speed + " m/s";
//         document.querySelector(selectors.pressure).innerHTML = weatherData.main.pressure + " hPa";

//     } catch (error) {
//         console.error(error);
//     }
// }

// // Fetch data for all cities
// cities.forEach(city => fetchAPI(city.name, city));
