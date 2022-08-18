/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  $(".error-no-tweet").hide();
  $(".error-long-tweet").hide();


  const renderTweets = function (tweets) {
    for (let i = tweets.length - 1; i >= 0; i--) {
      let tweet = tweets[i];
      const $tweet = $(createTweetElement(tweet));
      $(".tweets-container").append($tweet);
    }
  };

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
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
    <p class="comment">${escape(tweetData.content.text)}</p>
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

    $(".error-no-tweet").hide();
    $(".error-long-tweet").hide();

    if ($("#tweet-text").val() === "") {
      return $(".error-no-tweet").show();
    }

    if ($("#tweet-text").val().length > 140) {
      return $(".error-long-tweet").show();
    }

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $(this).serialize(),
      success: (result) => {
        $("#tweet-text").val("");
        $(".counter").val(140);
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
        $(".tweets-container").empty();
        renderTweets(result);
      },
    });
  };
  loadTweets();

  $(".write-a-new-tweet").click(function (event) {
    $("#tweet-text").focus();
  });
});
