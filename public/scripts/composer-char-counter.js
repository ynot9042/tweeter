$(document).ready(function () {
  console.log("Document Ready");

  $("#tweet-text").on("input", function () {
    let tweetLength = Number(this.value.length);
    let charLeft = 140 - Number(tweetLength);

    if (tweetLength <= 140) {
      //console.log(charLeft);
      $(this).siblings(".button-counter").children(".counter").val(charLeft)
    } else if (tweetLength > 140) {
      let overValue = tweetLength - 140;
      let result = "-" + overValue;
      $(this).siblings(".button-counter").children(".counter").val(result)

      //console.log(result);
    }
  });



});
