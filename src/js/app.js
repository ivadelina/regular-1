/* eslint-disable linebreak-style */
export default class Validator {
  validateUsername(name) {
    if (/^[a-z][\w_-]*[a-z]$/gmi.test(this.name)) {
      return /\d{0,3}/gm.test(name);
    } throw new Error('Некорректное имя');
  }
}
