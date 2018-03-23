$(document).ready(function() {
  var website = new FTRatingScore();
  var log = new FTRatingLog();

  $('#button4').on('click', function() {
    if (website.score == 0) {
      log.log(4);
    }
    else {
      log.log(0);
    }
    website.rate(4);
    alert("Thank you for rating FT");
    console.log(website.score);
    console.log(log.history);
  });

  $('#button3').on('click', function() {
    if (website.score == 0) {
      log.log(3);
    }
    else {
      log.log(0);
    }
    website.rate(3);
    alert("Thank you for rating FT");
    console.log(website.score);
    console.log(log.history);
  });

  $('#button2').on('click', function() {
    if (website.score == 0) {
      log.log(2);
    }
    else {
      log.log(0);
    }
    website.rate(2);
    alert("Thank you for rating FT");
    console.log(website.score);
    console.log(log.history);
  });

  $('#button1').on('click', function() {
    if (website.score == 0) {
      log.log(1);
    }
    else {
      log.log(0);
    }
    website.rate(1);
    alert("Thank you for rating FT");
    console.log(website.score);
    console.log(log.history);
  });
});
