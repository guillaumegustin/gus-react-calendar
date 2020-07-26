import moment from 'moment';

import {
  secondsToPercentDay,
  momentFormat,
  serieByDate,
  dataByDay,
  calculateBarPositionInDay,
  calculateSpotPositionInDay,
} from '../formatter';
import { data, data2 } from './mock';

test('Foramtter secondsToPercentDay', () => {
  expect(secondsToPercentDay(6 * 60 * 60)).toStrictEqual(25);
  expect(secondsToPercentDay(12 * 60 * 60)).toStrictEqual(50);
  expect(secondsToPercentDay(18 * 60 * 60)).toStrictEqual(75);
})

test('Formatter serieByDate', () => {
  const result = serieByDate(data[0]);
  expect(result).toBeDefined();
})


test('Formatter dataByDay', () => {
  const result = dataByDay(data);
  expect(result['20191201']).toBeDefined();
})

test('Formatter calculateBarPositionInDay 1', () => {
  const start = moment('2019-03-09 10:00', momentFormat);
  const end = moment('2019-03-10 12:00', momentFormat);
  const day = moment('2019-03-10');
  const result = calculateBarPositionInDay({start, end, day});
  expect(result).toStrictEqual({ left: 0, width: 50.001157407407405 });
})

test('Formatter calculateBarPositionInDay 2', () => {
  const start = moment('2019-03-09 10:00', momentFormat);
  const end = moment('2019-03-10 15:30', momentFormat);
  const day = moment('2019-03-10');
  const result = calculateBarPositionInDay({start, end, day});
  expect(result).toStrictEqual({ left: 0, width: 64.58449074074073 });
})

test('Formatter calculateBarPositionInDay 3', () => {
  const start = moment('2019-03-09 10:00', momentFormat);
  const end = moment('2019-03-11 15:30', momentFormat);
  const day = moment('2019-03-10');
  const result = calculateBarPositionInDay({start, end, day});
  expect(result).toStrictEqual({ left: 0, width: 100 });
})

test('Formatter calculateBarPositionInDay 4', () => {
  const start = moment('2019-03-10 10:00', momentFormat);
  const end = moment('2019-03-10 15:30', momentFormat);
  const day = moment('2019-03-10');
  const result = calculateBarPositionInDay({start, end, day});
  expect(result).toStrictEqual({ left: 41.666666666666664, width: 22.917824074074076 });
})

test('Formatter calculateBarPositionInDay 5', () => {
  const start = moment('2019-03-10 10:00', momentFormat);
  const end = moment('2019-03-11 15:30', momentFormat);
  const day = moment('2019-03-10');
  const result = calculateBarPositionInDay({start, end, day});
  expect(result).toStrictEqual({ left: 41.666666666666664, width: 58.333333333333336 });
})

test('Formatter calculateSpotPositionInDay 1', () => {
  const time = moment('2019-03-10 10:00', momentFormat);
  const day = moment('2019-03-10');
  const result = calculateSpotPositionInDay({time, day});
  expect(result).toStrictEqual(41.666666666666664);
})

test('Formatter calculateSpotPositionInDay 2', () => {
  const time = moment('2019-03-10 00:00', momentFormat);
  const day = moment('2019-03-10');
  const result = calculateSpotPositionInDay({time, day});
  expect(result).toStrictEqual(0);
});

test('Formatter calculateSpotPositionInDay 2', () => {
  const time = moment('2019-03-10 23:59:59', momentFormat);
  const day = moment('2019-03-10');
  const result = calculateSpotPositionInDay({time, day});
  expect(result).toStrictEqual(99.93055555555556);
});

test('Formatter save', () => {
  const result = serieByDate(data2[0]);
  // console.log('RESULT', result);
})