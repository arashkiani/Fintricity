function toRomen(num) {
  num = parseInt(num);
  let roman = '';
  if (num <= 0) { return ''; }
  const romenInt = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  Object.entries(romenInt).map((v) => {
    while (num >= v[1]) {
      roman += v[0] || '';
      num -= v[1];
    }
  });
  return roman;
}
module.exports = toRomen;
