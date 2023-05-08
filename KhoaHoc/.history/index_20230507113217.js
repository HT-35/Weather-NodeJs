const asyncRequest = require("async-request");
const { json } = require("stream/consumers");
const loca = null;
const getDataWeather = async() => {
    const url = `http://api.weatherstack.com/current?access_key=37b566a8327d3913cfca37fc095d2565&query=${loca}`;

    try {
        const res = await asyncRequest(url);
        const data = JSON.parse(res.body);
        const weather = {
            region: data.location.region,
            country: data.location.country,
            temperature: data.current.temperature,
            wind_speed: data.current.wind_speed,
            precip: data.current.precip,
            cloudcover: data.current.cloudcover,
        }
        console.log(weather);
    } catch (error) {
        console.log(error);
    }


}
getDataWeather();