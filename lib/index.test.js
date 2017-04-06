/* global test expect */
import addRemoveReplace from './';
import { add, remove, replace } from './';


test('should import default and use it', () => {
  expect(addRemoveReplace.add('#', 'String')).toBe('#String');
  expect(addRemoveReplace.remove('#', '#String')).toBe('String');
  expect(addRemoveReplace.replace('#', '_', '#String')).toBe('_String');
});

test('should import add, remove and replace and use it', () => {
  expect(add('#', 'String')).toBe('#String');
  expect(remove('#', '#String')).toBe('String');
  expect(replace('#', '_', '#String')).toBe('_String');
});
