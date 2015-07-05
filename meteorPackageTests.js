var testDistance = function(str1, str2, distance, percent){
  describe('levenshtein: '+str1+" <> "+str2, function () {
     it('should show the difference between two strings', function () {
        expect(Levenshtein.get(str1,str2)).toBe(distance);
        expect(Levenshtein.get(str2,str1)).toBe(distance);
     });
     it('should show the difference between two strings in percent', function () {
       expect(Levenshtein.getPercent(str1,str2).toFixed(2)).toBe(percent);
       expect(Levenshtein.getPercent(str2,str1).toFixed(2)).toBe(percent);
     });
   });
};

testDistance("boop","booking", 4, "0.43");
testDistance("archéologique","archeologie", 3,"0.77");
testDistance("baum","baum", 0, "1.00");
