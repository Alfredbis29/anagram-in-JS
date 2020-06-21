/* jshint esversion: 6 */

(function() {
  'use strict';

  describe('Anagram tests', function() {

    describe('1. Truthy Anagrams', function() {

      it('should return a boolean', function() {
        expect(isAnagram('h', 'h')).to.be.a('boolean');
      });

      it('should return true for 2 empty strings', function() {
        expect(isAnagram('', '')).to.equal(true);
      });

      it('should return true for anagrams', function() {
        expect(isAnagram('coat', 'taco')).to.equal(true);
        expect(isAnagram('bad', 'dab')).to.equal(true);
      });

      it('should ignore capitalizations in anagrams', function() {
        expect(isAnagram('coAt', 'taCO')).to.equal(true);
        expect(isAnagram('BaD', 'dAb')).to.equal(true);
      });

      it('should ignore spaces in anagrams', function() {
        expect(isAnagram('co  at', ' taco')).to.equal(true);
        expect(isAnagram('bad  ', 'da b')).to.equal(true);
      });

      it('should ignore numbers in anagrams', function() {
        expect(isAnagram('co4at', 'taco3')).to.equal(true);
        expect(isAnagram('bad2', '123dab')).to.equal(true);
      });

      it('should ignore all non-letter characters in anagrams', function() {
        expect(isAnagram('co4at  __ . >', 't4<>?a  co3')).to.equal(true);
        expect(isAnagram('b --- ===ad;::2', '1-2-3+dab')).to.equal(true);
      });

    });

    describe('2. Falsy Anagrams', function() {

      it('should return false for non-anagrams', function() {
        expect(isAnagram('coat', 'boat')).to.equal(false);
        expect(isAnagram('tree', 'plant')).to.equal(false);
      });


      it('should return false for wrong repeating letter', function() {
        expect(isAnagram('coaat', 'tacoo')).to.equal(false);
        expect(isAnagram('badd', 'dabb')).to.equal(false);
      });

      it('should return false with non-letter characters given for non-anagrams', function() {
        expect(isAnagram('coaa   ___ --- 1234 t', 'tac0 ()o')).to.equal(false);
        expect(isAnagram('ba  ()))dd', 'd - + = {} abb')).to.equal(false);
      });

    });
  });
}());
