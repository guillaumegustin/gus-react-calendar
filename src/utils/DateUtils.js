import * as Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

export const getDaysForMonth = (year, month) => {
  const startDate = moment(`${year}${month}01`);
  const firstDay = moment(startDate).startOf('month')
  const endDay = moment(startDate).endOf('month')

  const monthRange = moment.range(firstDay, endDay)
  const days =  Array.from(monthRange.by('days'));
  return days;
}

export const getHoursInDay = (dayMoment) => {
  const start = moment(dayMoment).startOf('date');
  const end = moment(dayMoment).endOf('date');
  const hoursRange = moment.range(start, end);
  const hours = Array.from(hoursRange.by('hours'));
  console.log('hours', hours);
  return hours;
}