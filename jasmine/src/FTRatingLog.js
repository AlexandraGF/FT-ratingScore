var FTRatingLog = function (){
  this.history = [];
};

FTRatingLog.prototype.log = function (rate) {
  this.history.push(rate);
};
