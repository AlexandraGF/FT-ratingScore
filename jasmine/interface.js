$(document).ready(function() {
  var website = new FTRatingScore();
  var log = new FTRatingLog();

  $('#button4').on('click', function() {
    website.rate(4);
    log.log(4);
    alert("Thank you for rating FT");
    console.log(website.score);
    console.log(log.history);
  });

  $('#button3').on('click', function() {
    log.log(3);
    website.rate(3);
    alert("Thank you for rating FT");
    console.log(website.score);
    console.log(log.history);
  });

  $('#button2').on('click', function() {
    log.log(2);
    website.rate(2);
    alert("Thank you for rating FT");
    console.log(website.score);
    console.log(log.history);
  });

  $('#button1').on('click', function() {
    log.log(1);
    website.rate(1);
    alert("Thank you for rating FT");
    console.log(website.score);
    console.log(log.history);
  });
});
