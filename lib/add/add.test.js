/* global test expect */
/* eslint-disable no-undefined */
import add from './add';

test('should add content at the beginning', () => {
  expect(add('#', 'String')).toBe('#String');
});

test('should add content to the end', () => {
  expect(add('#', 'String', false)).toBe('String#');
});

test('should output original target if type is invalid to add at beginning', () => {
  expect(add('#', false)).toBe(false);
  expect(add('#', null)).toBe(null);
  expect(add('#', undefined)).toBe(undefined);
  expect(add('#', add)).toBe(add);
});

test('should output original target if type is invalid to add to the end', () => {
  expect(add('#', false, false)).toBe(false);
  expect(add('#', null, false)).toBe(null);
  expect(add('#', undefined, false)).toBe(undefined);
  expect(add('#', add, false)).toBe(add);
});

test('should add at beginning of strings inside arrays', () => {
  expect(add('#', ['String1', 'String2'])[0]).toBe('#String1');
});

test('should add to the end of strings inside arrays', () => {
  expect(add('#', ['String1', 'String2'], false)[0]).toBe('String1#');
});

test('should output original array items if types are invalid to add at beginning', () => {
  expect(add('#', [false, 'String2'])[0]).toBe(false);
  expect(add('#', [null, 'String2'])[0]).toBe(null);
  expect(add('#', [undefined, 'String2'])[0]).toBe(undefined);
  expect(add('#', [add, 'String2'])[0]).toBe(add);
});

test('should output original array items if types are invalid to add to the end', () => {
  expect(add('#', [false, 'String2'], false)[0]).toBe(false);
  expect(add('#', [null, 'String2'], false)[0]).toBe(null);
  expect(add('#', [undefined, 'String2'], false)[0]).toBe(undefined);
  expect(add('#', [add, 'String2'], false)[0]).toBe(add);
});

test('should output different types of items inside array and add at beginning of strings', () => {
  expect(add('#', [false, 'String2'])[1]).toBe('#String2');
  expect(add('#', [null, 'String2'])[1]).toBe('#String2');
  expect(add('#', [undefined, 'String2'])[1]).toBe('#String2');
  expect(add('#', [add, 'String2'])[1]).toBe('#String2');
});

test('should output different types of items inside array and add to the end of strings', () => {
  expect(add('#', [false, 'String2'], false)[1]).toBe('String2#');
  expect(add('#', [null, 'String2'], false)[1]).toBe('String2#');
  expect(add('#', [undefined, 'String2'], false)[1]).toBe('String2#');
  expect(add('#', [add, 'String2'], false)[1]).toBe('String2#');
});

test('should add at beginning of numbers', () => {
  expect(add(2, 1)).toBe(21);
});

test('should add to the end of numbers', () => {
  expect(add(2, 1, false)).toBe(12);
});

test('should output origin target if content type is wrong to add at beginning of number', () => {
  expect(add('2', 1)).toBe(1);
  expect(add(false, 1)).toBe(1);
  expect(add(null, 1)).toBe(1);
  expect(add(undefined, 1)).toBe(1);
  expect(add(add, 1)).toBe(1);
});

test('should output origin target if content type is wrong to add to the end of number', () => {
  expect(add('2', 1, false)).toBe(1);
  expect(add(false, 1, false)).toBe(1);
  expect(add(null, 1, false)).toBe(1);
  expect(add(undefined, 1, false)).toBe(1);
  expect(add(add, 1, false)).toBe(1);
});

