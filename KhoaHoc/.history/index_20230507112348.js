const url = `http://api.weatherstack.com/current?access_key=37b566a8327d3913cfca37fc095d2565&query= New York`;

const asyncRequest = require("async-request");
const { json } = require("stream/consumers");

const getDataWeather = async() => {
    const res = await asyncRequest(url);
    const data = JSON.parse(res.body);
    console.log(data[current][temperature]);
}
getDataWeather();