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
  this.average = 0;
};

FTRatingScore.prototype.rate = function (score) {
    this.score += score;
    this.numberClicks += 1;
    this.average = (this.score / this.numberClicks).toFixed(2);

    switch (score) {
    case 4:
      this.score4 += 1;
      break;
    case 3:
      this.score3 += 1;
      break;
    case 2:
      this.score2 += 1;
      break;
    case 1:
      this.score1 += 1;
      break;
   }

    this._average();
};

FTRatingScore.prototype._average = function () {
  this.percentage4 = ((this.score4 / this.numberClicks) * 100).toFixed(0) + '%';
  this.percentage3 = ((this.score3 / this.numberClicks) * 100).toFixed(0) + '%';
  this.percentage2 = ((this.score2 / this.numberClicks) * 100).toFixed(0) + '%';
  this.percentage1 = ((this.score1 / this.numberClicks) * 100).toFixed(0) + '%';
};
