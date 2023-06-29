export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    console.log("Got a response from the API")
  })
    .then((promise) => {
      resolve({status: 200, body: 'Success'});
      console.log("Got a response from the API")
    }) 
    .catch(() => {
	 reject(new Error(''));
    });
}
