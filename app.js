const geocode = require('./geocode/geocode');
const yargs = require('yargs');
const weather = require('./weather/weather');
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
  // console.log(argv)
  // geocode.test()
  geocode.geocodeAddress(argv.address,(errorMessage,loaction_data)=>{
    if(errorMessage){
      console.log(errorMessage);
    }else{
      console.log(loaction_data.Address);
      weather.getWeather(loaction_data,(errorMessage,weatherResults)=>{
        if(errorMessage){
          console.log(errorMessage);
        } else{
          console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`)
        }
      });
    }
  });
