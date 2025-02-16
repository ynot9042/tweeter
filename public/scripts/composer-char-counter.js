$(document).ready(function () {
  //On initial page load hides the second toggle button(Stretch)
  $("#up-arrow").hide();

  //Functionality of both toggle buttons as user scrolls(Stretch)
  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      $("#up-arrow").fadeIn();
      $(".write-a-new-tweet").fadeOut();
    } else {
      $("#up-arrow").fadeOut();
      $(".write-a-new-tweet").fadeIn();
    }
  });

  //Functionality of second toggle button
  $("#up-arrow").click("click", function (event) {
    $("#up-arrow").hide();
    $("#tweet-text").focus();
  });

  //Character counter functionality
  $("#tweet-text").on("input", function () {
    let tweetLength = Number(this.value.length);
    let charLeft = 140 - Number(tweetLength);
    let counter = $(this).siblings(".button-counter").children(".counter");

    if (tweetLength <= 140) {
      $(this).siblings(".button-counter").children(".counter").val(charLeft);
      counter.removeClass("negative");
    } else if (tweetLength > 140) {
      let overValue = tweetLength - 140;
      let result = "-" + overValue;
      counter.addClass("negative");
      counter.val(result);
    }
  });
});
