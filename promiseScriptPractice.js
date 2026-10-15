/*
PRACTICE 1
Create a script which has two methods that return promises - One of the promises should get reolved after 6 seconds timeout and the other one after 3 seconds timeout. Call the promise in such a way that the second promise is invoked after the first promise is resolved.

PRACTICE 2
Change the code to call the promises sequentially and see how the output changes.
*/

// defining promise 1 as an expression
const promise1 = new Promise((resolve, reject) => {
	setTimeout(()=>{
		resolve('Promise 1 resolved')
	},6000);
});

// define promise 2 as a function
function promise2() {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			resolve('Promise 2 resolved')
		},3000);
	});
}

// Practice 1 => Invoking promise1 before promise2
promise1.then((successMessage)=>{
	console.log('From Callback ' + successMessage + ' in Practice 1.');
	return promise2();
}).then((successMessage)=>{
	console.log('From Callback ' + successMessage + ' in Practice 1.');
});

console.log('Learnt something great');

// Practice 2 => Calling promises sequentially
promise1.then((successMessage)=>{
	console.log('From Callback ' + successMessage + ' in Practice 2.');
});

promise2().then((successMessage)=>{
	console.log('From Callback ' + successMessage + ' in Practice 2.');
});
