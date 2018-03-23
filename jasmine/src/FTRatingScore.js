var FTRatingScore = function (){
  this.score = 0;
};

FTRatingScore.prototype.rate = function (score) {
    this.score += score;
};
