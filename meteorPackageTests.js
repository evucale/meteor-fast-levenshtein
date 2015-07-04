describe('levenshtein', function () {
   it('should show the difference between two strings', function () {
      expect(Levenshtein.get("boop","booking")).toBe(4);
      expect(Levenshtein.get("archeologie","archéologique")).toBe(3);
      expect(Levenshtein.get("baum","baum")).toBe(0);
   });
 });
