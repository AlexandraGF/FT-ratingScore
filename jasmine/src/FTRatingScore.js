var FTRatingScore = function (){
  this.score = 0;
  this.numberClicks = 0;
  this.score4 = 0;
  this.score3 = 0;
  this.score2= 0;
  this.score1 = 0;
  this.percentage4 = 0;
  this.percentage3 = 0;
  this.percentage2= 0;
  this.percentage1 = 0;
};

FTRatingScore.prototype.rate = function (score) {
    this.score += score;
    this.numberClicks += 1;

    if (score == 4) {
      this.score4 += 1;
    }
    else if (score == 3) {
      this.score3 += 1;
    }
    else if (score == 2) {
      this.score2 += 1;
    }
    else if (score == 1) {
      this.score1 += 1;
    }

    this.percentage4 = ((this.score4 / this.numberClicks) * 100).toFixed(0) + '%';
    this.percentage3 = ((this.score3 / this.numberClicks) * 100).toFixed(0) + '%';
    this.percentage2 = ((this.score2 / this.numberClicks) * 100).toFixed(0) + '%';
    this.percentage1 = ((this.score1 / this.numberClicks) * 100).toFixed(0) + '%';
};
