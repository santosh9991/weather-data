const request = require('request');

var geocodeAddress = (address,callback)=> {
  var encodedString = encodeURIComponent(address);
  // console.log(encodedString)
  /*first argument to request is a request object, used to specify the
  unique request parameters
  */
  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedString}&key=AIzaSyBJ3ZlvvmcMX9tY8rQu5SmPoF5WUev2rwU`,
    json:true
  },(error,response,body)=>{
    // console.log(JSON.stringify(body,undefined,2))
    if (error){
      callback('REquest Error');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Improper address');
    } else if (body.status === 'OK'){
      callback(undefined,{
        'Address':body.results[0].formatted_address,
        'Latitude':body.results[0].geometry.location.lat,
        'Longitude':body.results[0].geometry.location.lng
      })
  } else if (body.status ==='INVALIED_REQUEST') {
    console.log('Invalied adress')
  }
});

};
var test = ()=>{
  console.log('tesing')
}
module.exports.geocodeAddress=geocodeAddress
