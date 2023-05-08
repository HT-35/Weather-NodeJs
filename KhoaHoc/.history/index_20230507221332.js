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

const path = require('path');

const pathPublic = path.join(__dirname, "./public");
app.use(express.static());


//  khởi tạo một ứng dụng Express.
const app = express();

console.log(pathPublic)

//    Đoạn mã này xác định một route cho yêu cầu GET tới URL "/".
//     http://localhost:8888/ 
app.get("/", (req, res) => {
    res.send("hello World");
})


// Khai báo một biến port có giá trị là 8888 để server lắng nghe yêu cầu tới từ port này.
const port = 8888;

//server được khởi động bằng cách gọi phương thức listen() của đối tượng app. 
//Khi server được khởi động thành công, đoạn mã sẽ in ra thông báo "my server port 8888: http://localhost:8888/" trên console.
app.listen(port, () => {
    console.log("my server port 8888: http://localhost:8888/  ");
})