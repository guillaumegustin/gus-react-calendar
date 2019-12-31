import moment from 'moment';
import {
  momentFormat,
  serieByDate,
  dataByDay,
  positionPercentInHour,
  dataSpotLeftPercentInHour,
  filterDataSerieWithinHourRange,
} from '../formatter';
import { data } from './mock';

test('Formatter serieByDate', () => {
  const result = serieByDate(data[0]);
  expect(result).toBeDefined();
})

test('Formatter filterDataSerieWithinHourRange', () => {
  const start = moment('2019-12-01 03:00');
  const end = moment('2019-12-01 10:00');
  const result = filterDataSerieWithinHourRange(data[0].serie, start, end);
  result.forEach(r => {
    expect(moment(r.start || r.date || r.time, momentFormat).isAfter(start)).toBeTruthy();
  })
});

test('Formatter dataByDay', () => {
  const result = dataByDay(data);
  expect(result['20191201']).toBeDefined();
})

test('Formatter positionPercentInHour 1', () => {
  const start = moment('2019-03-10 10:30');
  const end = moment('2019-03-10 10:45');
  const hourMin =  moment('2019-03-10 10:00');
  const hourMax =  moment('2019-03-10 11:00');
  const result = positionPercentInHour(start, end, hourMin, hourMax);
  expect(result).toStrictEqual({ left: 50, width: 25 });
})

test('Formatter positionPercentInHour 2', () => {
  const start = moment('2019-03-10 10:00');
  const end = moment('2019-03-10 11:10');
  const hourMin =  moment('2019-03-10 10:00');
  const hourMax =  moment('2019-03-10 11:00');
  const result = positionPercentInHour(start, end, hourMin, hourMax);
  expect(result).toStrictEqual({ left: 0, width: 100 });
})

test('Formatter positionPercentInHour 3', () => {
  const start = moment('2019-03-09 10:00');
  const end = moment('2019-03-10 12:10');
  const hourMin =  moment('2019-03-10 10:00');
  const hourMax =  moment('2019-03-10 11:00');
  const result = positionPercentInHour(start, end, hourMin, hourMax);
  expect(result).toStrictEqual({ left: 0, width: 100 });
})

test('Formatter dataSpotLeftPercentInHour', () => {
  expect(dataSpotLeftPercentInHour('2019-03-09 10:00', '2019-03-09 10:00')).toStrictEqual(0)
  expect(dataSpotLeftPercentInHour('2019-03-09 10:30', '2019-03-09 10:00')).toStrictEqual(50)
  expect(dataSpotLeftPercentInHour('2019-03-09 10:15', '2019-03-09 10:00')).toStrictEqual(25)
  expect(dataSpotLeftPercentInHour('2019-03-09 09:15', '2019-03-09 10:00')).toStrictEqual(0)
  expect(dataSpotLeftPercentInHour('2019-03-09 11:15', '2019-03-09 10:00')).toStrictEqual(100)
})