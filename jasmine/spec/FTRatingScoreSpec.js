describe('FTRatingScore', function (){

  describe('The visitor can ', function(){
    it('rate Financial Times website', function() {
      website = new FTRatingScore();
      website.rate(3);
      expect(website.score).toEqual(3);
    });
  });

 describe('More than one visitor', function(){
    it(' can rate Financial Times website', function() {
      website = new FTRatingScore();
      website.rate(3);
      website.rate(4);
      expect(website.score).toEqual(7);
    });
  });

  describe('Visitor can see ', function(){
     it('the number of ratings for each option', function() {
       website = new FTRatingScore();
       website.rate(3);
       website.rate(4);
       website.rate(3);
       expect(website.score3).toEqual(2);
     });

     it('percentage for each rating', function() {
       website = new FTRatingScore();
       website.rate(4);
       website.rate(4);
       website.rate(3);
       website.rate(2);
       expect(website.percentage4).toEqual("50%");
     });
   });

});
