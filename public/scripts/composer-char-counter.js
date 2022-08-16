$(document).ready(function () {
  console.log("Document Ready");

  $("#tweet-text").on("input", function () {
    let tweetLength = Number(this.value.length);
    let charLeft = 140 - Number(tweetLength);

    if (tweetLength <= 140) {
      $(this).siblings(".button-counter").children(".counter").val(charLeft);
    } else if (tweetLength > 140) {
      let overValue = tweetLength - 140;
      let result = "-" + overValue;
      let counter = $(this).siblings(".button-counter").children(".counter");
      counter.addClass("negative")
      $(this).siblings(".button-counter").children(".counter").val(result);
      
    }
  });
});
