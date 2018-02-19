

const request = require('request');
var getWeather = (location_data,callback) => {
  request({
    url:`https://api.darksky.net/forecast/133e3c0977d246184e7179e8c5156909/${location_data.Latitude},${location_data.Longitude}`,
    json:true
  },(error,response,body)=>{
    if (!error && response.statusCode===200){
      callback(undefined,{
        temperature:body.currently.temperature,
        apparentTemperature:body.currently.apparentTemperature});
    } else if (error){
      callback('unable to connect to forecast.io server');
    }
    else {
      // console.log(body.currently.temperature);
      console.log('unable to fetch wether');
    }
  });
};

module.exports.getWeather = getWeather
