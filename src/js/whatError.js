export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Ошибка 1'],
      [12, 'Ошибка 12'],
    ]);
    this.errors.set(14, 'Ошибка 14');
    this.errors.set(15, 'Ошибка 15');
    this.errors.set(25, 'Ошибка 25');
    this.errors.set(35, 'Ошибка 35');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
