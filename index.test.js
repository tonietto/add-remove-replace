/* global test expect */
import addRemoveReplace from './';
import { add, remove, replace } from './';


test('should import default and use add', () => {
  expect(addRemoveReplace.add('#', 'String')).toBe('#String');
});

test('should import add and use it', () => {
  expect(add('#', 'String')).toBe('#String');
});

test('should import default and use remove', () => {
  expect(addRemoveReplace.remove('#', '#String')).toBe('String');
});

test('should import remove and use it', () => {
  expect(remove('#', '#String')).toBe('String');
});

test('should import default and use replace', () => {
  expect(addRemoveReplace.replace('#', '_', '#String')).toBe('_String');
});

test('should import replace and use it', () => {
  expect(replace('#', '_', '#String')).toBe('_String');
});
