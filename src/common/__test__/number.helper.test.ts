import { fNumber } from 'common/number.helper';

describe('Number helper ', () => {
  test('F number test', () => {
    expect(fNumber(1406.24)).toBe('1406.24');
    expect(fNumber(14000)).toBe('14000.00');
  });
});
