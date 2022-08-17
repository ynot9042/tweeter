$(document).ready(function () {
  console.log("Document Ready");

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
