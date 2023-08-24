const search = document.getElementById('searchIcon');
const weatherimg = document.getElementById('weather');
const city_name = document.getElementById('city-name');
const weather_style = document.getElementById('weather-style');
const weather_measure = document.getElementById('weather-measure')
const wind_speed = document.getElementById('wind-speed');
const humidity = document.getElementById('humidity');
const time = document.getElementById('time');
const date = document.getElementById('date');
const day = document.getElementById('day');
const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
};
const daysOfWeek = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
};

search.addEventListener('click',()=>{
    getCity();
    weather.style.display = 'block';
})
const getCity =  () =>{
    const val = document.querySelector('input');
    const city = val.value;
    getWeather(city);
    
}
const getWeather = async (city) =>{
    const api_key = `{Your API Key}`;
    if(city!=''){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const data = await fetch(url);
    const res = await data.json();
    setWeather(res);
    setbgimg(res.weather[0].description);
}

}
const setWeather = (res)=>{
    console.log(res)
    city_name.textContent = res.name;
    weather_style.textContent = res.weather[0].description;
    weather_measure.textContent = Math.round(res.main.temp - 273.15)+`°`;
    wind_speed.textContent = res.wind.speed;
    humidity.textContent = res.main.humidity;
    updateTime();
    setInterval(updateTime,1000);
}
const updateTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const formattedTime = `${hours}:${(minutes)}:${(seconds)}`;
    time.textContent = formattedTime;
}


const setdate = ()=>{
    const d = new Date();
    day.textContent = daysOfWeek[d.getDay()]+` , `;
    date.textContent = d.getDate()+` `+months[d.getMonth()]+` `+d.getFullYear();
}

const setbgimg = (key)=>{
    console.log(key);

    if(key=='overcast clouds'){
        weatherimg.style.backgroundImage = 'url(https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=792&q=80)';
    }
    else if(key=='rain'){
        weatherimg.style.backgroundImage = 'url(https://images.unsplash.com/photo-1536329978773-2f8ac431f330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80)';
        
    }
    else if(key=='thunderstorm'){
        weatherimg.style.backgroundImage = 'url(https://images.unsplash.com/photo-1561471026-0bbb77535d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)';
        
    }
    else if(key=='clear sky'){
        weatherimg.style.backgroundImage = 'url(https://plus.unsplash.com/premium_photo-1673474112205-037558e54995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80)';
        
    }
    else if(key=='snow'){
        weatherimg.style.backgroundImage = 'url(https://images.unsplash.com/photo-1514969655361-1dbc3731d4cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)';
        
    }
    else if(key=='mist'){
        weatherimg.style.backgroundImage = 'url(https://plus.unsplash.com/premium_photo-1675714692752-5b0358918e31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)';
        
    }
    else if(key=='scattered clouds'){
        weatherimg.style.backgroundImage = 'url(https://images.unsplash.com/photo-1598378028718-37a61e030860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80)';
        
    }
    else if(key=='shower rain'){
        weatherimg.style.backgroundImage = 'url(https://images.unsplash.com/photo-1532203512255-3c9c9d666c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=421&q=80)';
        
    }
    else if(key=='light rain'){
        weatherimg.style.backgroundImage = 'url(https://images.unsplash.com/photo-1532203512255-3c9c9d666c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=421&q=80)';
        
    }
    else if(key=='haze'){
        weatherimg.style.backgroundImage = 'url(https://images.unsplash.com/photo-1423209086112-cf2c8acd502f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80)';
        
    }
    else{
        weatherimg.style.backgroundImage = 'url(https://images.unsplash.com/photo-1579541671172-43429ce17aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80)';
    }


}
setdate();
getCity();
