var FTRatingScore = function (){
  this.score = 0;
  this.score4 = 0;
  this.score3 = 0;
  this.score2= 0;
  this.score1 = 0;
};

FTRatingScore.prototype.rate = function (score) {
    this.score += score;
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
};
