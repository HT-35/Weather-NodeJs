const asyncRequest = require("async-request");
const { json } = require("stream/consumers");

const getDataWeather = async(loca) => {
    // const access_key = "37b566a8327d3913cfca37fc095d2565";
    const access_key = "37b566agegrefca37fc095d2565";
    const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${loca}`;

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
        // console.log("dell");
    }
}
getDataWeather("tokyo");