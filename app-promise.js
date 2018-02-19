const axios = require('axios');
const yargs = require('yargs');
var argv = yargs
  .options({
    a:{
      demand:true,
      alias:'address',
      strin:true,
      describe: "Address to fetch wether for"
    }
  })
  .help()
  .alias('help','h')
  .argv;
    var encodedString = encodeURIComponent(argv.address);
    var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedString}&key=AIzaSyBJ3ZlvvmcMX9tY8rQu5SmPoF5WUev2rwU`
    axios.get(geocodeUrl).then((response)=>{

      if (response.data.status === 'ZERO_RESULTS'){
        console.log(response)
        throw new Error('Unable to find that address.');
      }

      var lat = response.data.results[0].geometry.location.lat;
      var lng = response.data.results[0].geometry.location.lng;

      var weatherURL = `https://api.darksky.net/forecast/133e3c0977d246184e7179e8c5156909/${lat},${lng}`
      console.log(weatherURL)
      console.log(response.data.results[0].formatted_address);
      return axios.get(weatherURL);
    }).then((response)=>{
      // console.log(response)
      temperature = response.data.currently.temperature;
      apparentTemperature = response.data.currently.apparentTemperature
      console.log(`its currently ${temperature}, feels like ${apparentTemperature}`)
    }).catch((error)=>{
      if (error.code==='ENOTFOUND'){
        console.log('Unable to connect to API servers')
      }else{
        console.log(error.message);
      }

    })
