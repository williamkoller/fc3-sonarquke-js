const sum = require('./sum');

describe('Sum', () => {
  it('should be must 1 + 2 to be equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
