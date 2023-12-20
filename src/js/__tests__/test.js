import check from '../app';
const person1 = {name: 'Маг', health: 90};
const person2 = {name: 'Воин', health: 50};
const person3 = {name: 'Друид', health: 14.5};

test('check person to be healthy', () => {
  const result = 'healthy';
  expect(result).toBe(check(person1));
});

test('check person to be wounded', () => {
  const result = 'wounded';
  expect(result).toBe(check(person2));
});

test('check person to be critical', () => {
  const result = 'critical';
  expect(result).toBe(check(person3));
});
