/*

let url = 'https://api.github.com/users/chaharsumit';

function fetch(url){
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => resolve(JSON.parse(xhr.response));
    xhr.onerror = () => reject('Something went wrong!');
    xhr.send();
  })
}

let data = fetch(url).then((data) => {console.log('Fetching data successful')}).catch((error) => {'ERROR 404'});

*/
let key = '';
let input = document.querySelector('input');
let allImages = Array.from(document.querySelectorAll('.gallery-item img'));
let imageGallery = document.querySelector('.image-gallery');

function handleInput(event){
  key = input.value;
  if(event.key === 'Enter'){
    handleImageCreation(key).then((result) => {
      handleUI(result.results);
    });
    event.target.value = '';
  }
}

/*

function handleImageCreation(key){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${key}&client_id=OYOTItSH5_c56O-OArkzV_irhLKOFV3Yc-Gz73gBMkA`);
  xhr.onload = function(){
    let imageData = JSON.parse(xhr.response);
    imageData.results.forEach(elm => {
    handleUI(elm.urls.thumb);
    });
  }
  xhr.send();
}

*/

function handleImageCreation(key){
  return new Promise((resolve,reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${key}&client_id=OYOTItSH5_c56O-OArkzV_irhLKOFV3Yc-Gz73gBMkA`);
    xhr.onload = () => resolve(JSON.parse(xhr.response));
    xhr.onerror = () => reject('something went wrong');
    xhr.send();
  });
}

function handleUI(images){
  imageGallery.innerHTML = '';
  images.forEach(image => {
    console.log(image);
    let div = document.createElement('div');
    div.classList.add('gallery-item');
    let img = document.createElement('img');
    img.src = image.urls.regular;
    div.append(img);
    imageGallery.append(div);
  });
}

input.addEventListener('keyup', handleInput);