import { add } from './sample.js';

// Gerkin   GwT

describe('Given Add function', () => {
  describe('When we have two numbers',
    () => {
      test('Af a = 1 and b = 1 result should be 0', () => {
        // Arrange
        const a = 1;
        const b = 1;
        const expected = 2;
        // Act
        const r = add(a, b);
        // Assert
        expect(r).toBe(expected);
      });
    };)
});
