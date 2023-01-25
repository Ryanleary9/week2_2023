import { add } from './sample.js';

describe('Testing Add', () => {
  test('Af a = 1 and b = 1 result should be 0', () => {
    const r = add(1, 1);
    expect(r).toBe(2);
  });
});
