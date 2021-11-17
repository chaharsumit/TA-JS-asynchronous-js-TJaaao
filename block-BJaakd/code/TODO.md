1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

```js

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise Resolved');
  }, 1000);
});

promise1.then((val) => console.log(val));




```

2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

```js
// Your code
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise Rejected');
  });
});

promise2.catch(console.log);
```

3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log message `Promise Settled!`.

```js
// Your code
let promise3 = new Promise((resolve, reject) => {
  reject('Rejected Promise');
});

promise3.catch(console.log).finally(console.log('Promise Settled!'));

```

4. What will be the output of the code below.

```js
console.log('A');

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log('B'), 0); // callback queue

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log('C'));

console.log('D');

// 'A'
// 'D'
// 'C'
// 'B'
```

5. Write a function named `wait` that accepts `time` in ms returns a promise. The promise gets resolved after given time.

```js
// Your code
function wait(time){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolved');
    }, time);
  })
}

wait(5000).then(console.log);
```

6. Do the following:

- Create a new promise
- Resolve with 21
- Use `.then` and return adding `10` to the value you will get as parameter
- Use `.then` and return adding `100` to the value you will get as parameter
- Use `.then` and check if the value you get is greater than `100` throw new error with any message
- Catch the error using `.catch`

```js
let promise4 = new Promise((resolve, reject) => {
  resolve(21);
});

promise4.then((val) => val + 10).then((val) => val + 100).then((val) => {
  if(val > 100)
    throw new Error('Value exceeded 100');
  }).catch(console.log);
```

7. Do the following:

- Create a new promise
- Resolve the promise with `['A']`
- Use `.then` and concat `B` into the parameter and return
- Use `.then` and return and object like `{0: 'A', 1: 'B'}`
- Use `.then` and log the value

```js
// Your code
let promise5 = new Promise((resolve, reject) => {
  resolve(['A']);
});

promise5.then((val) => {
  return val.concat('B');
}).then((val) => {
  return val.reduce((acc,curr,idx) => {
    acc[idx] = curr;
    return acc;
  }, {});
}).then(console.log);
```

8. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Chain `.then` on above and return `3` also check the value you get access to by logging
- Chain `.then` on above and return `4` also check the value you get access to by logging

```js
// Your code
let first = new Promise((resolve, reject) => {
  resolve('1');
})

first.then(val => {
  console.log(val);
  return '2'}).then(val => {
  console.log(val);
  return '3'}).then(val => {
  console.log(val);
  return '4'});
```

9. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Use `.then` on `first` and return `3` also check the value you get access to by logging
- Use `.then` on `first` and return `4` also check the value you get access to by logging

```js
let first = new Promise((resolve, reject) => {
  resolve('1');
})

first.then(val => {
  console.log(val);
  return '2';
});
first.then(val => {
  console.log(val);
  return '3';
});
first.then(val => {
  console.log(val);
  return '4';
});
```

10. Try to understand the difference between the problem 8 and 9. Write your observation.

  In 8 there's chaining taking place for all the 'then' for the promise 'first' but in the 9 problem every single on of them is on top of the chain so the value getting passed in all of them is '1'.

11. Do the following

- Create a promise and resolve it with `John`
- Use `.then` and return another promise that resolves with `Arya`
- Use `.then` log the value you get access to and return another promise that resolves after 2000ms with value `Bran`
- Use `.then` to log the value

```js
// Your code
let first = new Promise((resolve, reject) => {
  resolve('john');
});

first.then((val) => {
  return (new Promise((resolve, reject) => {
    resolve('Arya');
  }));
}).then((val) => {
  console.log(val);
  return (new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Bran')
    }, 2000);
  }));
}).then((val) => {
  console.log(val);
});


```
