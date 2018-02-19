var asyncAdd = (a,b)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }
    else {
      reject('Arguments must be integers')
    }
  },1500);
  });
}

asyncAdd(5,'7').then((res)=>{
  console.log(res);
  return asyncAdd(res,'33');
}).then((res)=>{
  console.log('result must be 45',res);
}).catch((errorMessage)=>{
  console.log(errorMessage);
});
/*Expected output is one errorMessage: 'Arguements must be integers', but we get
the following output:
Arguments must be integers
result must be 45 undefined
this can overcome b
*/

// var somePromise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('Hey. It worked!');
//   },2500);
// });
//
// somePromise.then((message)=>{
//   console.log('Sucess:',message);
// },(errorMessage)=>{
//   console.log('Error: ', errorMessage);
// });
