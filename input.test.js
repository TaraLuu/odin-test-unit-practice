const {capF, revF, addF, subsF, divF, multF, ccF, analyzeArray} = require('./input.js')

//part 1
test('capitalize properly', () => {
  expect(capF('helloWorld')).toMatch('HelloWorld');
});

//part 2
test('reverse string properly', () => {
  expect(revF('Today')).toMatch('yadoT');
});

//part 3
test('adds 1 + 2 to equal 3', () => {
  expect(addF(1, 2)).toBe(3);
});
test('substract 7 - 2 to equal 5', () => {
  expect(subsF(7, 2)).toBe(5);
});
test('divides 15 / 5 to equal 3', () => {
  expect(divF(15, 5)).toBe(3);
});
test('multiplies 10 * 4 to equal 40', () => {
  expect(multF(10, 4)).toBe(40);
});

//part 4
test('CeasarCipher', () => {
  expect(ccF('A')).toEqual('b');
});

//part 5
test('analyze array properly', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual( {
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});