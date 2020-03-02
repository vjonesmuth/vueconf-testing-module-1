import User from './user.js';

const firstName = 'John';
const lastName = 'Rambo';

test('it should display first and last name', () => {
  const user = new User({firstName, lastName});

  const result = user.name;
  expect(result).toBe(`${firstName} ${lastName}`);
});

test('it should display name initials', () => {
  const user = new User({firstName, lastName});

  const result = user.initials;
  expect(result).toBe('JR');
});
