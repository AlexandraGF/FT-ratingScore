describe('FTRatingScore', function (){

  describe('The visitor can ', function(){
    it('rate Financial Times website', function() {
      website = new FTRatingScore();
      website.rate(3);
      expect(website.score).toEqual(3);
    });

    it('not rate Financial Times website twice per visit', function() {
      website = new FTRatingScore();
      website.rate(3);
      website.rate(4);
      expect(website.score).toEqual(3);
    });
});
});
