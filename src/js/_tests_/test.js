import ErrorRepository from '../whatError';

test.each([
  ['есть код ошибки', 1, 'Ошибка 1'],
  ['нет кода ошибки', 13, 'Unknown error'],
])(
  'Проверка метода translate с %s',
  (__, errorNumber, expected) => {
    const err = new ErrorRepository();
    expect(err.translate(errorNumber)).toBe(expected);
  },
);
