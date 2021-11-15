let input = document.querySelector('input');
let allImages = Array.from(document.querySelectorAll('.gallery-item img'));
let imageGallery = document.querySelector('.image-gallery');
input.addEventListener('keyup', handleInput);

function handleInput(event){
  let imageKey = input.value;
  if(event.key === 'Enter'){
    imageGallery.innerHTML = '';
    handleImageCreation(imageKey);
    event.target.value = '';
  }
}

function handleImageCreation(key){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${key}&client_id=OYOTItSH5_c56O-OArkzV_irhLKOFV3Yc-Gz73gBMkA`);
  xhr.onload = function(){
    let imageData = JSON.parse(xhr.response);
    imageData.results.forEach(elm => {
    handleUI(elm.urls.raw);
    });
  }
  xhr.send();
}

function handleUI(image){
  let div = document.createElement('div');
  div.classList.add('gallery-item');
  let img = document.createElement('img');
  img.src = image;
  div.append(img);
  imageGallery.append(div);
}