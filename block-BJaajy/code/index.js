function promiseAll() {
  
}

// Test:
let times = [1, 2, 3, 4];
let timesPromise = times.map(
  (second) =>
    new Promise((res) => {
      setTimeout(() => res(Math.random()), second * 1000);
    })
);

promiseAll(timesPromise).then(console.log);

















/*
- Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.

let p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(1);
  },1000);
})

let p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res(2);
  },2000);
})
let p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res(3);
  },3000);
})

let p4 = new Promise((res, rej) => {
  setTimeout(() => {
    res(4);
  },4000);
})

let p1 = setTimeout(() => {
  Promise.resolve('john')
},1000);

let p2 = setTimeout(() => {
  Promise.resolve('2')
},2000);

let p3 = setTimeout(() => {
  Promise.resolve('3')
},3000);

let p4 = setTimeout(() => {
  Promise.resolve('4')
},4000);

let allPromises = Promise.all([p1,p2,p3,p4]).then((res) => {
  res.forEach(elm => {
    console.log(elm);
  })
});


- Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.

let userNames = ['chaharsumit','shivamsinghchahar','akashprasher','getify','gaearon'];

let data = Promise.all(userNames.map((user) => fetch(`https://api.github.com/users/${user}`).then(res => res.json()))).then(users => {
  users.forEach(elm => console.log(elm.followers)); 
});


- Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

  - https://random.dog/woof.json
  - https://aws.random.cat/meow

  let newPromise1 = new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://random.dog/woof.json`);
  xhr.onload = resolve('promise1');
  });

  let newPromise2 = new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://aws.random.cat/meow`);
  xhr.onload = resolve('promise1');
  });

  Promise.race([newPromise1, newPromise2]).then(console.log);




- Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

```js
const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

Promise.all([one,two,three]).then(console.log);
Promise.allSettled([one,two,three]).then(console.log);
```

- What will be the output of the following code snippet? How much time will it take for the promise to resolve?

```js
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log);

// It will take 1 second to get resolved 
```
*/
