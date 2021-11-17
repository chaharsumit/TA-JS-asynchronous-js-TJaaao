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