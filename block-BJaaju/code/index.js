let input = document.querySelector('input');
let allImages = Array.from(document.querySelectorAll('.gallery-item img'));

input.addEventListener('keyup', handleInput);

function handleInput(event){
  let imageKey = event.target.value;
  if(event.key === 'Enter'){
    handleImageCreation(imageKey);
    event.target.value = '';
  }
}

function handleImageCreation(key){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://source.unsplash.com/featured/?grafiti`);
  let imageData = xhr.response;
  console.log(xhr);
}