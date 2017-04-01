/* global test expect */
/* eslint-disable no-undefined */
import remove from './remove';

test('should remove content', () => {
  expect(remove('#', '#String')).toBe('String');
});

test('should output original target if type is invalid', () => {
  expect(remove('#', false)).toBe(false);
  expect(remove('#', null)).toBe(null);
  expect(remove('#', undefined)).toBe(undefined);
  expect(remove('#', remove)).toBe(remove);
});

test('should remove content from strings inside arrays', () => {
  expect(remove('#', ['#String1', '#String2'])[0]).toBe('String1');
});

test('should output original array items if types are invalid', () => {
  expect(remove('#', [false, '#String2'])[0]).toBe(false);
  expect(remove('#', [null, '#String2'])[0]).toBe(null);
  expect(remove('#', [undefined, '#String2'])[0]).toBe(undefined);
  expect(remove('#', [remove, '#String2'])[0]).toBe(remove);
});


test('should output different types of items inside array and remove from strings', () => {
  expect(remove('#', [false, '#String2'])[1]).toBe('String2');
  expect(remove('#', [null, '#String2'])[1]).toBe('String2');
  expect(remove('#', [undefined, '#String2'])[1]).toBe('String2');
  expect(remove('#', [remove, '#String2'])[1]).toBe('String2');
});

test('should remove from numbers', () => {
  expect(remove(2, 21)).toBe(1);
});

test('should output origin target if content type is wrong to remove from number', () => {
  expect(remove('2', 1)).toBe(1);
  expect(remove(false, 1)).toBe(1);
  expect(remove(null, 1)).toBe(1);
  expect(remove(undefined, 1)).toBe(1);
  expect(remove(remove, 1)).toBe(1);
});
