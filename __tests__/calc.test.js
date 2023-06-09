const { test, expect } = require('@jest/globals');
const { calculate } = require('../src/app');

// Mock the document object
const mockDocument = {
  querySelector: jest.fn(() => ({ innerText: '' })),
};

global.document = mockDocument;

const num1 = 16;
const num2 = 4;

test('Add numbers', () => {
  expect(calculate(num1, num2, '+')).toBe(20);
});

test('Subtract numbers', () => {
  expect(calculate(num1, num2, '-')).toBe(12);
});

test('Multiply numbers', () => {
  expect(calculate(num1, num2, '*')).toBe(64);
});

test('Divide numbers', () => {
  expect(calculate(num1, num2, '/')).toBe(4);
});
