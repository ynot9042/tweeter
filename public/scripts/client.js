/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]



$(document).ready(function () { 

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $tweet = $(createTweetElement(tweet));
      $(".tweets-container").append($tweet);
    };
  };

  const createTweetElement = function (tweetData) {
    let tweetObj = `<article class="tweet">
    <header>
      <div class="name-avatar">
        <img src="${tweetData.user.avatars}">
        <p>${tweetData.user.name}</p>
      </div>
      <p class="handle">${tweetData.user.handle}</p>
    </header>
    <p class="comment">${tweetData.content.text}</p>
    <footer>
      <p class="time-ago">${tweetData.created_at}</p>
      <div class="icons">
        <div class="flag-icon">
          <i class="fa-solid fa-flag"></i>
        </div>
        <div class="retweet-icon">
          <i class="fa-solid fa-retweet"></i>
        </div>
        <div class="heart-icon">
          <i class="fa-solid fa-heart"></i>
        </div>
      </div>
    </footer>
  </article>`;
  
    return tweetObj;  
  };
  

  renderTweets(data);

});




