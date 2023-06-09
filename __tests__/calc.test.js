import { test, expect } from '@jest/globals';
import calc from '../src/app';

const num1 = 16;
const num2 = 4;

test('Add numbers', () => {
  expect(calc(num1, num2, '+')).toBe(20);
});

test('Subtract numbers', () => {
  expect(calc(num1, num2, '-')).toBe(12);
});

test('Multiply numbers', () => {
  expect(calc(num1, num2, '*')).toBe(64);
});

test('Divide numbers', () => {
  expect(calc(num1, num2, '/')).toBe(4);
});
