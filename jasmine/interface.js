$(document).ready(function() {
  var website = new FTRatingScore();
  var log = new FTRatingLog();

  $('#button4').on('click', function() {
    website.rate(4);
    log.log(4);
    $('#score4').text(website.score4);
    $('#percentage4').text(website.percentage4);
    $('#percentage3').text(website.percentage3);
    $('#percentage2').text(website.percentage2);
    $('#percentage1').text(website.percentage1);
    alert("Thank you for rating FT");
    console.log(website.score);
    console.log(log.history);
  });

  $('#button3').on('click', function() {
    log.log(3);
    website.rate(3);
    $('#score3').text(website.score3);
    $('#percentage4').text(website.percentage4);
    $('#percentage3').text(website.percentage3);
    $('#percentage2').text(website.percentage2);
    $('#percentage1').text(website.percentage1);
    alert("Thank you for rating FT");
    console.log(website.score);
    console.log(log.history);
  });

  $('#button2').on('click', function() {
    log.log(2);
    website.rate(2);
    $('#score2').text(website.score2);
    $('#percentage4').text(website.percentage4);
    $('#percentage3').text(website.percentage3);
    $('#percentage2').text(website.percentage2);
    $('#percentage1').text(website.percentage1);
    alert("Thank you for rating FT");
    console.log(website.score);
    console.log(log.history);
  });

  $('#button1').on('click', function() {
    log.log(1);
    website.rate(1);
    $('#score1').text(website.score1);
    $('#percentage4').text(website.percentage4);
    $('#percentage3').text(website.percentage3);
    $('#percentage2').text(website.percentage2);
    $('#percentage1').text(website.percentage1);
    alert("Thank you for rating FT");
    console.log(website.score);
    console.log(log.history);
  });
});
