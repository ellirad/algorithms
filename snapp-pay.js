const promise1 = new Promise();
const promise2 = new Promise();

function promiseAll(promises) {
		return new Promise (resolve, reject) {
		let promiseResults = [];

		for (let i = 0; i < promises.length; i++) {
			promises[i].then(result => {
				if (result) {
					promiseResults.push(result)
					if (promises.length === promiseResults.length) {
						resolve(promiseResults)
					}
				}
			}).catch(error => {
				reject(error);
			})
		}
	}
}