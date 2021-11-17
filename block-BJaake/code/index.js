let url = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=30';
let newsSection = document.querySelector('section');
let select = document.querySelector('select');
let allNews = [];

let data = fetch(url).then(res => res.json()).then((news) => {
  allNews = news;
  createNewsArticle(news);
  createSelectMenu(news,createSelectMenuData(news));
});

function createSelectMenu(news,newsSites){
  newsSites.forEach(newsSite => {
    let option = document.createElement('option');
    option.setAttribute('value', newsSite);
    option.innerText = newsSite;
    select.append(option);
  });
}

function createSelectMenuData(news){
  return Array.from(new Set(news.map(newsinfo => newsinfo.newsSite)));
}

function createNewsArticle(news){
  newsSection.innerHTML = '';
  news.forEach(newsinfo => {
    let article = document.createElement('article');
    article.classList.add('news-article', 'flex');
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    let img = document.createElement('img');
    img.classList.add('news-image');
    img.setAttribute('alt', 'image');
    img.src = newsinfo.imageUrl;
    let newsContent = document.createElement('div');
    newsContent.classList.add('news-content');
    let newsSite = document.createElement('p');
    newsSite.classList.add('news-site');
    newsSite.innerText = newsinfo.newsSite;
    let newsTitle = document.createElement('h3');
    newsTitle.classList.add('news-title');
    newsTitle.innerText = newsinfo.title;
    let readButton = document.createElement('a');
    readButton.classList.add('read-btn');
    readButton.innerText = 'READ MORE';
    readButton.href = newsinfo.url;
    readButton.setAttribute('target', '__blank');
    imageContainer.append(img);
    newsContent.append(newsSite,newsTitle,readButton);
    article.append(imageContainer, newsContent);
    newsSection.append(article);
  })
}

function createNewsForSelectedOption(event){
  let key = event.target.value.trim();
  let newsForSelectedOption = [];
  newsForSelectedOption = allNews.filter(n => n.newsSite === key);
  createNewsArticle(newsForSelectedOption);   
};

select.addEventListener('change', createNewsForSelectedOption);


/*
<article class="news-article flex">
        <div class="image-container">
          <img src="https://source.unsplash.com/random" alt="image" class="news-image">
        </div>
        <div class="news-content">
          <p class="news-site">ISRO</p>
          <h3 class="news-title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, earum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, odio.</h3>
          <a href="#" class="read-btn">Read More</a>
        </div>
  </article>
  */