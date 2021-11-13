/*
let h3 = document.querySelector('h3');
let img = document.querySelector('img');
let p = document.querySelector('p');
let following = document.querySelector('.following');
let followers = document.querySelector('.followers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/chaharsumit');
xhr.onload = function(){
  let userData = JSON.parse(xhr.response);
  h3.innerText = userData.login;
  img.src = userData.avatar_url;
  p.innerText = userData.name;
  following.innerText = `Following : ${userData.following}`;
  followers.innerText = `Followers : ${userData.followers}`;
};

xhr.onloadstart = function(){
  console.log('Data loading started');
}

xhr.onloadend = function(){
  console.log('Data loading ended');
};

xhr.send();
*/

let userName = document.querySelector('h3');
let nameUser = document.querySelector('h1');
let avatar = document.querySelector('.avatar');
let followers = document.querySelector('.follower-list');
let following = document.querySelector('.following-list');
let input = document.querySelector('input');
let followerItems = Array.from(document.querySelectorAll('.follower-item img'));
let followingItems = Array.from(document.querySelectorAll('.following-item img'));
let nameToFetch;

input.addEventListener('keyup', handleInput);

function handleInput(event){
  if(event.key === 'Enter'){
    nameToFetch = event.target.value;
    handleFetchRequestForUser(nameToFetch);
    handleFetchRequestForFollowers(nameToFetch);
    hadnleFetchRequestForFollowing(nameToFetch);
    input.value = '';
  }
}


function handleFetchRequestForUser(n){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.github.com/users/${n}`);
  xhr.onload = function(){
    let userData = JSON.parse(xhr.response);
    nameUser.innerText = userData.name;
    userName.innerText = `@ ${userData.login}`;
    avatar.src = userData.avatar_url;
  }
  xhr.send();
}

function handleFetchRequestForFollowers(n){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.github.com/users/${n}/followers`);
  xhr.onload = function(){
    let userData = JSON.parse(xhr.response);
    for(let i = 0 ; i < 5 ; i++){
      followerItems[i].src = userData[i].avatar_url;
    }
  }
  xhr.send();
}


function hadnleFetchRequestForFollowing(n){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.github.com/users/${n}/following`);
  xhr.onload = function(){
    let userData = JSON.parse(xhr.response);
    for(let i = 0 ; i < 5 ; i++){
      followingItems[i].src = userData[i].avatar_url;
    }
  }
  xhr.send();
}