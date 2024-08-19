import fc from 'fast-check';
import { capitalize } from './string.utils';

describe('string utils', () => {
  describe(capitalize.name, () => {
    it('should capitalize a word, i.e. making the first letter uppercase', () => {
      const word = 'test';

      const expected = 'Test';
      const actual = capitalize(word);

      expect(actual).toBe(expected);
    });

    it('should capitalize a word, even if it\'s already capitalized', () =>
      fc.assert(
        fc.property(fc.string(), (str) => {
          const capitalized = capitalize(str);

          return capitalized[0] === capitalized[0]?.toUpperCase();
        }),
      ));

    it('should not change any other letters than the first one', () => {
      const word = 'tEsT123';

      const expected = 'TEsT123';
      const actual = capitalize(word);

      expect(actual).toBe(expected);
    });
  });
});
