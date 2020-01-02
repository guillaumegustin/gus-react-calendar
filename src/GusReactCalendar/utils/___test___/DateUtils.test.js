import { getDaysForMonth, formatMonth} from '../DateUtils';

test('DateUtils, formatMonth', () => {
  expect(formatMonth(12)).toStrictEqual('12');
  expect(formatMonth(8)).toStrictEqual('08');
})

test('DateUtils, getDaysForMonth', () => {
  const decemberDays = getDaysForMonth(2019, 12);
  expect(decemberDays.length).toStrictEqual(31);

  const julyDays = getDaysForMonth(2019, 8);
  expect(julyDays.length).toStrictEqual(31);
})