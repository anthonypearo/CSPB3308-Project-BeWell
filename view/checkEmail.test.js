const checkEmail = require('./checkForm');

//example emails from https://gist.github.com/cjaoude/fd9910626629b53c4d25

//true tests
test('email@example.com is an email', () => {
  expect(checkEmail('email@example.com')).toBe(true);
});

test('firstname.lastname@example.com', () => {
  expect(checkEmail('firstname.lastname@example.com')).toBe(true);
	});
	
test('email@subdomain.example.com', () => {
  expect(checkEmail('email@subdomain.example.com')).toBe(true);
	});
	
test('firstname+lastname@example.com', () => {
  expect(checkEmail('firstname+lastname@example.com')).toBe(true);
	});

	
test('email@123.123.123.123', () => {
  expect(checkEmail('email@123.123.123.123')).toBe(true);
	});


test('email@[123.123.123.123]', () => {
  expect(checkEmail('email@[123.123.123.123]')).toBe(true);
});

test('"email"@example.com', () => {
  expect(checkEmail('"email"@example.com')).toBe(true);
});

test('1234567890@example.com', () => {
  expect(checkEmail('1234567890@example.com')).toBe(true);
});

test('email@example-one.com', () => {
  expect(checkEmail('email@example-one.com')).toBe(true);
});

test('_______@example.com', () => {
  expect(checkEmail('_______@example.com')).toBe(true);
});

test('email@example.name', () => {
  expect(checkEmail('email@example.name')).toBe(true);
});

test('email@example.museum', () => {
  expect(checkEmail('email@example.museum')).toBe(true);
});

test('email@example.co.jp', () => {
  expect(checkEmail('email@example.co.jp')).toBe(true);
});

test('firstname-lastname@example.com', () => {
  expect(checkEmail('firstname-lastname@example.com')).toBe(true);
});


//false tests
test('plainaddress', () => {
  expect(checkEmail('plainaddress')).toBe(false);
});


test('@example.com', () => {
  expect(checkEmail('@example.com')).toBe(false);
});


test('email.example.com', () => {
  expect(checkEmail('email.example.com')).toBe(false);
});


test('blank string', () => {
  expect(checkEmail('')).toBe(false);
});

test('email@example', () => {
  expect(checkEmail('email@example')).toBe(false);
});