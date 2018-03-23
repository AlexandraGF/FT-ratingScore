$(document).ready(function() {
  var website = new FTRatingScore();

  $('#button4').on('click', function() {
      website.rate(4);
      console.log(website.score);
      alert("Thank you for rating FT");

  });

  $('#button3').on('click', function() {
    website.rate(3);
    console.log(website.score);
    alert("Thank you for rating FT");
  });

  $('#button2').on('click', function() {
    website.rate(2);
    console.log(website.score);
    alert("Thank you for rating FT");
  });

  $('#button1').on('click', function() {
    website.rate(1);
    console.log(website.score);
    alert("Thank you for rating FT");
  });
});
