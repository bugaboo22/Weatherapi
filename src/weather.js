import React, { useState } from 'react';

function Weather() {    
          
    const [weather,setWeather]= useState(''); 
    const [temperature, setTemperature] = useState('');
    const [image, setImage] = useState(''); 
    const [query, setQuery] = useState('');

const ask = () => {
         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=7487a3e36ed548f947415f7a49fd44cd`)
        .then(res => res.json())
        .then(responseData => {
            setWeather(responseData.weather[0].description)
            setTemperature(responseData.main.temp)
            setImage(responseData.weather[0].icon)     
        
    })     
    .catch(err => console.log(err))      
 };         
   
return(
  <div>
        <input type="text"  value={query} onChange={e => setQuery(e.target.value)}/>
        <button onClick={ask} >Get weather</button>
        <h2> {query} Weather </h2> 
        <p>Temperature: {temperature} Celsius </p> 
        <p>Weather: {weather}</p>
        <div>
        <img alt="" src={`http://openweathermap.org/img/wn/${image}@2x.png`} />
        </div>       
  </div>  
);
}

export default Weather;

