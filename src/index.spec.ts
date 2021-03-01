import pakaiClass from './index';

describe('pakaiClass', () => {
  it('returns nothing given nothing', () => {
    const result = pakaiClass();

    expect(result).toBe('');
  });

  it('returns properly merged class names given an array of strings with single class names', () => {
    const result = pakaiClass('a', 'b', 'c');

    expect(result).toBe('a b c');
  });

  it('returns properly merged class names given an array of strings with multiple class names', () => {
    const result = pakaiClass('a b', 'c d', 'e f');

    expect(result).toBe('a b c d e f');
  });

  it('returns properly merged class names given an array of arrays of strings with single class names', () => {
    const result = pakaiClass(['a', 'b'], ['c', 'd']);

    expect(result).toBe('a b c d');
  });

  it('returns properly merged class names given an array of arrays of strings with multiple class names', () => {
    const result = pakaiClass(['a b', 'c d'], ['e f', 'g h']);

    expect(result).toBe('a b c d e f g h');
  });

  it('does not include null, undefined or other non-string arguments in the result', () => {
    const result = pakaiClass('a', 'b', 'c', null, ['d', null], () => {}, 'e', undefined);

    expect(result).toBe('a b c d e');
  });
});
