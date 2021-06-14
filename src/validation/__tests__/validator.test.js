const { validate } = require('../validator');

describe('validator test', () => {
  it('should not throw error if salary and name are valid', () => {
    expect(() => {
      validate('name', 1234);
    }).not.toThrow();
  });

  describe('validate name', () => {
    test.each(['', null, undefined, 1234])(
      'should throw error if name is "%s"',
      (x) => {
        expect(() => {
          validate(x, 1234);
        }).toThrow('Please enter valid name : string');
      }
    );
  });

  describe('validate salary', () => {
    test.each(['string', '', null])(
      'should throw error if salary is "%s"',
      (x) => {
        expect(() => {
          validate('name', x);
        }).toThrow('Please enter valid salary : number');
      }
    );

    it('should not throw error if salary is less than 0', () => {
      expect(() => {
        validate('name', -2);
      }).toThrow('Salary must be greater than 0.');
    });
  });
});
