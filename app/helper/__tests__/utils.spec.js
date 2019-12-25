import * as utils from '../index';

describe('utils', () => {
  it('getRandomByInt generate number from zero to entered number', () => {
    const number = 10;
    const randomNumber = utils.randomByNum(number);
    const lessOrMore = (randomNumber >= 0) && (randomNumber <= number);

    expect(lessOrMore).toEqual(true);
  });

  it('getArrayByFieldName', () => {
    const obj = [
      {
        text: 'Text',
      }, {
        text: 'Text2',
      },
    ];

    const expectArr = ['Text', 'Text2'];

    expect(utils.getArrayByFieldName(obj, 'text')).toEqual(expectArr);
  });
});
