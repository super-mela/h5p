import fc from 'fast-check';
import { clamp } from './number.utils';

describe('number utils', () => {
  describe(clamp.name, () => {
    it('should return the value if it\'s larger than the minimum and smaller than the maximum', () =>
      fc.assert(
        fc.property(fc.double({ noNaN: true }), (value) => {
          const expectedValue = value;
          const actualValue = clamp(value - 1, value, value + 1);

          return expectedValue === actualValue;
        }),
      ));

    it('should return the minimum if the value is smaller than the minimum', () => {
      const minimum = 0;
      const value = -1;
      const maximum = 2;

      const expected = 0;
      const actual = clamp(minimum, value, maximum);

      expect(actual).toBe(expected);
    });

    it('should return the maximum if the value is larger than the maximum', () => {
      const minimum = 0;
      const value = 3;
      const maximum = 2;

      const expected = 2;
      const actual = clamp(minimum, value, maximum);

      expect(actual).toBe(expected);
    });
  });
});
