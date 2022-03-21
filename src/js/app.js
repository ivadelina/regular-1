/* eslint-disable linebreak-style */
export default class Validator {
  validateUsername(name) {
    if (/^[a-z][\w_-]*[a-z]$/gmi.test(name) && !/\d\d\d/.test(name)) {
      return true
    } throw new Error('Некорректное имя');
  }
}
