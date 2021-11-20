let booksContainer = document.querySelector('.cards-container');
let characterList = document.querySelector('.character-list');
let characterWrapper = document.querySelector('.character-wrapper');
let close = document.querySelector('#cross');
let key = 0;
let booksDataCollection = [];

function init() {
  handleLoaderForUI(true);
  fetch("https://www.anapioficeandfire.com/api/books")
  .then(res => res.json())
  .then(res => {
    handleLoaderForUI();
    booksDataCollection = res;
    createUI(res);
  }).finally(() => {
    handleLoaderForUI();
  })
}

function fetchCharacters(data){
  data.forEach(elm => {
    fetch(`${elm}`).then(res => res.json()).then(res => {
      createCharactersUI(res);
    });
  });
}

function handleLoaderForUI(status = false){
  if(status){
    booksContainer.innerHTML = `<div class="loader"></div>`;
  }
}

function handleLoaderForCharactersUI(status = false){
  if(status){
    characterList.innerHTML = `<div class="loader"></div>`;
  }else{
    characterList.innerHTML = '';
  }
}

function handleClick(event){
  characterList.innerHTML = '';
  fetchCharacters(booksDataCollection[event.target.dataset.key].characters);
  booksContainer.style.display = 'none';
  characterWrapper.style.display = 'block';
  return false;
}

function createUI(bookData){
  booksContainer.innerHTML = '';
  bookData.forEach((book) => {
  let bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  let h2 = document.createElement('h2');
  h2.innerText = book.name;
  let h3 = document.createElement('h3');
  h3.innerText = book.authors;
  let a = document.createElement('a');
  a.setAttribute('data-key', key);
  a.innerText = `show characters (${book.characters.length})`;
  a.addEventListener('click', handleClick);
  bookCard.append(h2,h3,a);
  booksContainer.append(bookCard);
  key++;
  });
}

function createCharactersUI(result){
  let li = document.createElement('li');
  li.innerText = result.name;
  characterList.append(li);
}


close.addEventListener('click', function(){
  characterWrapper.style.display = 'none';
  booksContainer.style.display = 'flex';
});

init();
