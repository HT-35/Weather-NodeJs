const asyncRequest = require("async-request");
const { json } = require("stream/consumers");

const getDataWeather = async(loca) => {
        const access_key = "37b566a8327d3913cfca37fc095d2565";
        // const access_key = "37b566a8313cfca37fc095d2565";

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
            return {
                isSucsess: false,
                error,
            }
        }
    }
    // getDataWeather("Bien Hoa");


// tạo server : 
/**
 * b1) import express
 */


//Dòng đầu tiên khai báo một biến express và yêu cầu nạp (import) thư viện express.
const express = require("express");

//  khởi tạo một ứng dụng Express.
const app = express();


//  http://localhost:8888/ 
app.get("/", (req, res) => {
    res.send("hello World");
})


// khai báo port
const port = 8888;
app.listen(port, () => {
    console.log("my server port 8888: http://localhost:8888/  ");
})