describe('levenshtein', function () {
   it('should show the difference between two strings', function () {
      expect(Levenshtein.get("boop","booking")).toBe(4);
      expect(Levenshtein.get("archeologie","arch�ologique")).toBe(3);
   });
 });
