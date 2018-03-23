var FTRatingScore = function (){
  this.score = 0;
};

FTRatingScore.prototype.rate = function (score) {
  if (this.score != 0) {
  this.score += 0;
}
 else {
   this.score += score;
 }
};
