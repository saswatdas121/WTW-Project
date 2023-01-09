// variables
const generalBtn = document.getElementById("genral");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

const next = document.getElementById('next');
const prev = document.getElementById('prev');

var page = 1;
let newsCategory = '';

// Array
var newsDataArr = [];

// apis 
const API_KEY = "6f838c6fa1a2445ebb0268cc7acd638c";
const HEADLINES_NEWS = `https://newsapi.org/v2/top-headlines?country=in&pageSize=6&page=${page}&apiKey=`;
const GENERAL_NEWS = `https://newsapi.org/v2/top-headlines?country=in&pageSize=6&page=${page}&category=general&apiKey=`;
const BUSINESS_NEWS = `https://newsapi.org/v2/top-headlines?country=in&category=business&page=${page}&pageSize=6&apiKey=`;
const SPORTS_NEWS = `https://newsapi.org/v2/top-headlines?country=in&category=sports&page=${page}&pageSize=6&apiKey=`;
const ENTERTAINMENT_NEWS = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&page=${page}&pageSize=6&apiKey=`;
const TECHNOLOGY_NEWS = `https://newsapi.org/v2/top-headlines?country=in&category=technology&page=${page}&pageSize=6&apiKey=`;
const SEARCH_NEWS = `https://newsapi.org/v2/everything?q=`;

window.onload = function() {
    newsType.innerHTML = "<h4>Headlines</h4>";
    fetchHeadlines();
};

prev.addEventListener("click", function() {
    prevHandler();
});


next.addEventListener("click", function() {
    nextHandler();
});


generalBtn.addEventListener("click", function() {
    let tempPage = 1;
    newsCategory = 'general';
    newsType.innerHTML = "<h4>General news</h4>";
    fetchGeneralNews();
});

businessBtn.addEventListener("click", function() {
    newsCategory = 'business';
    let tempPage = 1;
    newsType.innerHTML = "<h4>Business</h4>";
    fetchBusinessNews(tempPage);
});

sportsBtn.addEventListener("click", function() {
    let tempPage = 1;
    newsCategory = 'sports';
    newsType.innerHTML = "<h4>Sports</h4>";
    fetchSportsNews(tempPage);
});

entertainmentBtn.addEventListener("click", function() {
    let tempPage = 1;
    newsCategory = 'entertainment';
    newsType.innerHTML = "<h4>Entertainment</h4>";
    fetchEntertainmentNews(tempPage);
});

technologyBtn.addEventListener("click", function() {
    let tempPage = 1;

    newsType.innerHTML = "<h4>Technology</h4>";
    fetchTechnologyNews(tempPage);
});


const fetchHeadlines = async(tempPage) => {
    if (tempPage == 1) {
        page = tempPage;
    }
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=8&page=${page}&apiKey=6f838c6fa1a2445ebb0268cc7acd638c`);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}


const fetchGeneralNews = async(tempPage) => {
    if (tempPage == 1) {
        page = tempPage;
    }

    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=8&page=${page}&category=general&apiKey=6f838c6fa1a2445ebb0268cc7acd638c`);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchBusinessNews = async(tempPage) => {
    if (tempPage == 1) {
        page = tempPage;
    }
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&page=${page}&pageSize=8&apiKey=6f838c6fa1a2445ebb0268cc7acd638c`);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchEntertainmentNews = async(tempPage) => {
    if (tempPage == 1) {
        page = tempPage;
    }
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&page=${page}&pageSize=8&apiKey=6f838c6fa1a2445ebb0268cc7acd638c`);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchSportsNews = async(tempPage) => {
    if (tempPage == 1) {
        page = tempPage;
    }
    console.log(page);
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&page=${page}&pageSize=8&apiKey=6f838c6fa1a2445ebb0268cc7acd638c`);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

const fetchTechnologyNews = async(tempPage) => {
    if (tempPage == 1) {
        page = tempPage;
    }
    newsCategory = 'technology';
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=technology&page=${page}&pageSize=8&apiKey=6f838c6fa1a2445ebb0268cc7acd638c`);

    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}


function prevHandler() {
    page = page - 1;
    if (newsCategory == 'technology') {
        fetchTechnologyNews();
    } else if (newsCategory == 'sports') {
        fetchSportsNews();
    } else if (newsCategory == 'business') {
        fetchBusinessNews();
    } else if (newsCategory == 'entertainment') {
        fetchEntertainmentNews();
    } else if (newsCategory == 'general') {
        fetchGeneralNews();
    }
    displayNews();

}

function nextHandler() {
    page = page + 1;
    if (newsCategory == 'technology') {

        fetchTechnologyNews();
    } else if (newsCategory == 'sports') {
        fetchSportsNews();
    } else if (newsCategory == 'business') {
        fetchBusinessNews();
    } else if (newsCategory == 'entertainment') {
        fetchEntertainmentNews();
    } else if (newsCategory == 'general') {
        fetchGeneralNews();
    }
    displayNews();

}

function displayNews() {

    newsdetails.innerHTML = "";

    // if(newsDataArr.length == 0) {
    //     newsdetails.innerHTML = "<h5>No data found.</h5>"
    //     return;
    // }

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");

        var col = document.createElement('div');
        col.className = "col-sm-12 col-md-6 col-lg-4 col-xl-3 newsCard";

        var card = document.createElement('div');
        card.className = "card";


        var image = document.createElement('img');
        image.className = 'image'
        image.setAttribute("width", "100%");
        if (news.urlToImage == null) {
            image.src = 'no_image.jpg';
        } else {
            image.src = news.urlToImage;

        }

        var cardBody = document.createElement('div');
        cardBody.className = "cardBody";

        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        if (news.title != null) {
            newsHeading.innerHTML = news.title.substring(0, 85);
        } else {
            newsHeading.innerHTML = 'No Heading';
        }


        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className = "text-muted";
        if (news.description != null) {
            discription.innerHTML = news.description.substring(0, 85);
        } else {
            discription.innerHTML = 'Tap Below to Know More';
        }


        var link = document.createElement('a');
        link.className = "btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML = "Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        var imageBody = document.createElement('div');
        imageBody.className = "imageBody";
        var innerdiv = document.createElement('div');
        innerdiv.className = 'innerdiv'
        imageBody.appendChild(innerdiv);
        imageBody.appendChild(image);
        card.appendChild(imageBody);

        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });

}