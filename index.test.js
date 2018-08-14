const toRomen = require('./');
const data = require('./data');

describe('Int to Roman', () => {
  data.map((t) => {
    test(`Expect ${t.num} to be ${t.result ? t.result : 'Empty'}`, () => {
      expect(toRomen(t.num)).toBe(t.result);
    });
  });
});
