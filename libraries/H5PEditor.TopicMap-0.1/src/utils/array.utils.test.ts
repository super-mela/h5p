import { findClosest } from './array.utils';

describe('Array utils', () => {
  describe(findClosest.name, () => {
    it('should return the closest number in the array', () => {
      const value = 2;
      const arr = [1, 10];

      const expectedClosest = 1;
      const actualClosest = findClosest(value, arr);

      expect(actualClosest).toBe(expectedClosest);
    });
    it('should return the closest number in the array if the value is smaller than the array\'s smallest number', () => {
      const value = -1;
      const arr = [1, 10];

      const expectedClosest = 1;
      const actualClosest = findClosest(value, arr);

      expect(actualClosest).toBe(expectedClosest);
    });

    it('should return the closest number in the array if the value is larger than the array\'s largest number', () => {
      const value = 100;
      const arr = [1, 10];

      const expectedClosest = 10;
      const actualClosest = findClosest(value, arr);

      expect(actualClosest).toBe(expectedClosest);
    });

    it('should return the value if it exists in the array', () => {
      const value = 2;
      const arr = [1, 2, 10];

      const expectedClosest = 2;
      const actualClosest = findClosest(value, arr);

      expect(actualClosest).toBe(expectedClosest);
    });

    it('should throw an error if the array is empty', () => {
      const value = 1;
      const arr: Array<number> = [];

      expect(() => findClosest(value, arr)).toThrowError();
    });
  });
});
