/* global test expect */
import addRemoveReplace from './';
import { add } from './';

test('should import default and use add', () => {
  expect(addRemoveReplace.add('#', 'String')).toBe('#String');
});

test('should import add and use it', () => {
  expect(add('#', 'String')).toBe('#String');
});
