const request = require('request')
var geocodeAddress = (address)=>{
  return new Promise((resolve,reject)=>{
    encodedString = encodeURIComponent(address);
    request({
      url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedString}&key=AIzaSyBJ3ZlvvmcMX9tY8rQu5SmPoF5WUev2rwU`,
      json:true
    },(error,response,body)=>{
      // console.log(JSON.stringify(body,undefined,2))
      if (error){
        reject('REquest Error');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Improper address');
      } else if (body.status === 'OK'){
        // console.log(body.status,body.results)
        resolve({
          'Address':body.results[0].formatted_address,
          'Latitude':body.results[0].geometry.location.lat,
          'Longitude':body.results[0].geometry.location.lng
        })
    } else if (body.status ==='INVALIED_REQUEST') {
      reject('Invalied adress')
    }
  });
  })
};
geocodeAddress('78363').then((result)=>{
  console.log(JSON.stringify(result,undefined,2))
},(errorMessage)=>{
  console.log('Error: ', errorMessage)
})
