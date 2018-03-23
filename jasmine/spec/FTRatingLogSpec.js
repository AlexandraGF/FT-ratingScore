describe('FTRatingLog', function (){

  describe('The visitor can ', function(){
    it('see ratings history', function() {
      website = new FTRatingScore();
      ratings = new FTRatingLog();
      website.rate(3);
      ratings.log(3);
      expect(ratings.history).toEqual([3]);
    });

});
});
