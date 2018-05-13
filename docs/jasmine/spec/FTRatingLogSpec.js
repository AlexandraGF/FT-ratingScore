describe('FTRatingLog', function (){

  describe('The visitor can ', function(){
    it('see ratings history', function() {
      website = new FTRatingScore();
      ratings = new FTRatingLog();
      website.rate(3);
      ratings.log(3);
      website.rate(4);
      ratings.log(4);
      expect(ratings.history).toEqual([3,4]);
    });

});
});
