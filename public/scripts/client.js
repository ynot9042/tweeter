/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  const renderTweets = function (tweets) {
    for (let i = tweets.length - 1; i >= 0; i--) {
      let tweet = tweets[i];
      const $tweet = $(createTweetElement(tweet));
      $(".tweets-container").append($tweet);
    }
  };

  const createTweetElement = function (tweetData) {
    let timeAgo = timeago.format(tweetData.created_at);
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
      <p class="time-ago">${timeAgo}</p>
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

  $(".tweet-form").submit(function (event) {
    event.preventDefault();

    if ($("#tweet-text").val() === "") {
      return alert("Please enter a tweet!");
    }

    if ($("#tweet-text").val().length > 140) {
      return alert("Please shorten your tweet!");
    }

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $(this).serialize(),
      success: (result) => {
        $(".tweets-container").empty();
        $("#tweet-text").val("");
        loadTweets();
      },
      error: (error) => {
        console.error(error);
      },
    });
  });

  const loadTweets = function () {
    $.ajax({
      type: "GET",
      url: "/tweets",
      success: (result) => {
        renderTweets(result);
      },
    });
  };
  loadTweets();
});
