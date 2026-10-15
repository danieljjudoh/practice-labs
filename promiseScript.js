// creating a promise method. The promise will get resolved after 6 seconds.
const myPromise = new Promise((resolve, reject) => {
	setTimeout(()=>{
		resolve('Promise fullfilled')
	},6000);
});


// console log before calling the promise
console.log('before calling promise');

// call the promise and wait for it to be resolved. Then print a message
myPromise.then((successMessage)=>{
		console.log('From Callback ' + successMessage);
});

// console log after calling the promise
console.log('after calling promise');
