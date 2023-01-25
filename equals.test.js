import { strictEquals } from './equals.js';

describe('Given strictEquals', () => {
  describe('When we have two parameters', () => {
    test('If they are 1 and 1 it should return true', () => {
      const a = 1;
      const b = 1;
      const expected = true;
      const r = strictEquals(a, b);
      expect(r).toBe(expected);
    });
    test('If they are 1 and 1 it should return true', () => {
      const a = 'water';
      const b = 'oil';
      const expected = true;
      const r = strictEquals(a, b);
      expect(r).toBe(expected);
    });
    test('If they are 1 and 1 it should return true', () => {
      const a = 1;
      const b = 1;
      const expected = true;
      const r = strictEquals(a, b);
      expect(r).toBe(expected);
    });
  });
});
