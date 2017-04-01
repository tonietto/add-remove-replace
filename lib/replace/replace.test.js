/* global test expect */
/* eslint-disable no-undefined */
import replace from './replace';

test('should replace content', () => {
  expect(replace('#', '_', '#String')).toBe('_String');
});

test('should output original target if type is invalid', () => {
  expect(replace('#', '_', false)).toBe(false);
  expect(replace('#', '_', null)).toBe(null);
  expect(replace('#', '_', undefined)).toBe(undefined);
  expect(replace('#', '_', replace)).toBe(replace);
});

test('should replace content from strings inside arrays', () => {
  expect(replace('#', '_', ['#String1', '#String2'])[0]).toBe('_String1');
});

test('should output original array items if types are invalid', () => {
  expect(replace('#', '_', [false, '#String2'])[0]).toBe(false);
  expect(replace('#', '_', [null, '#String2'])[0]).toBe(null);
  expect(replace('#', '_', [undefined, '#String2'])[0]).toBe(undefined);
  expect(replace('#', '_', [replace, '#String2'])[0]).toBe(replace);
});

test('should output different types of items inside array and replace strings', () => {
  expect(replace('#', '_', [false, '#String2'])[1]).toBe('_String2');
  expect(replace('#', '_', [null, '#String2'])[1]).toBe('_String2');
  expect(replace('#', '_', [undefined, '#String2'])[1]).toBe('_String2');
  expect(replace('#', '_', [replace, '#String2'])[1]).toBe('_String2');
});

test('should replace numbers', () => {
  expect(replace(2, 1, 21)).toBe(11);
});

test('should output origin target if content type is wrong to replace number', () => {
  expect(replace('2', 0, 1)).toBe(1);
  expect(replace(false, 0, 1)).toBe(1);
  expect(replace(null, 0, 1)).toBe(1);
  expect(replace(undefined, 0, 1)).toBe(1);
  expect(replace(replace, 0, 1)).toBe(1);
});

test('should replace all occurrencies', () => {
  expect(replace('2', '1', '12332123')).toBe('11331113');
});

test('should also be a way of removing', () => {
  expect(replace('2', '', '12332123')).toBe('13313');
});
