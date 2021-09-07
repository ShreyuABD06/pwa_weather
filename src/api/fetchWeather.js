import axios from 'axios';
const URL='https://api.openweathermap.org/data/2.5/weather';
const API_KEY='c7a00cf1005f65eed25fe73427c427e0';


export const fetchWeather = async (query)=>{
    const {data}= await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY
        }
    });
    return data;
}