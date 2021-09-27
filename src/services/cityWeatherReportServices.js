import axios from 'axios';

const  s_getCityReport = async (cityName, token) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${token}`);
    return response.data;
}

export {
    s_getCityReport
};