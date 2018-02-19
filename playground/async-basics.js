console.log('Starting app');

setTimeout(()=>{
  console.log('Inside setTimeout')
},2000);

setTimeout(()=>{
  console.log('Inside second setTimeout');
})
console.log('Finishing up');
