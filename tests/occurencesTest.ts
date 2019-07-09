import occurences from "../src/occurences"

describe('Nr of occurences for each word in: ', () => {

    it('olly olly in come free', () => {
        let occ = new occurences('olly olly in come free');
      expect(occ.wordsAndOccurencesToString()).toEqual('[olly,2],[in,1],[come,1],[free,1]');
    })
    it('olly in come free', () => {
        let occ = new occurences('olly in come free');
      expect(occ.wordsAndOccurencesToString()).toEqual('[olly,1],[in,1],[come,1],[free,1]');
    })
    it('', () => {
        let occ = new occurences('');
      expect(occ.wordsAndOccurencesToString()).toEqual('');
    })
    it('olly olly', () => {
        let occ = new occurences('olly olly');
      expect(occ.wordsAndOccurencesToString()).toEqual('[olly,2]');
    })
    it('olly, olly %$^%@, rares98 rares98', () => {
        let occ = new occurences('olly, olly %$^%@, rares98 rares98');
      expect(occ.wordsAndOccurencesToString()).toEqual('[olly,2],[rares98,2]');
    })
    it('&^%#!&%#*&!^%  &^#!&^', () => {
        let occ = new occurences('&^%#!&%#*&!^%  &^#!&^');
      expect(occ.wordsAndOccurencesToString()).toEqual('');
    })
  })