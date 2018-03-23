describe('FTRatingScore', function (){

  describe('The visitor can ', function(){
    it('rate Financial Times website', function() {
      website = new FTRatingScore();
      website.rate(3);
      expect(website.score).toEqual(3);
    });
});
});
