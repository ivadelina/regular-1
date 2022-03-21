/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import Validator from './app.js';


test('Check user name if it is correct', () => {
  const createClass = new Validator('ivadelina');
  const result = createClass.validateUsername('ivadelina');
  const expected = true;
  expect(result).toEqual(expected);
});
test('Check user name if it is incorrect', () => {
  const createClass = new Validator('_iva2222delina-');
  expect(() => {
    createClass.validateUsername('_iva2222delina-');
  }).toThrow();
});
