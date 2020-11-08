const checkTextInput = require('./checkForm');

//true tests

test('Julie is an name', () => {
  expect(checkTextInput('Julie')).toBe(true); 
});


test("7 isn't an name", () => {
  expect(checkTextInput('7')).toBe(false);
});