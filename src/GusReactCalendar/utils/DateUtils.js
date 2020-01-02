import { moment, isLocaleHandled } from './moment';

export const getMonthLabel = (monthNumber, locale) => {
  const d = moment().month((monthNumber - 1));
  if (locale && isLocaleHandled(locale)) d.locale(locale);
  return d.format('MMMM YYYY');
};

export const getDaysForMonth = (year, month) => {
  const startDate = moment(`${year}${month}01`);
  const firstDay = moment(startDate).startOf('month')
  const endDay = moment(startDate).endOf('month')

  const monthRange = moment.range(firstDay, endDay)
  const days =  Array.from(monthRange.by('days'));
  return days;
}

export const getHoursInDay = (dayMoment = moment()) => {
  const start = moment(dayMoment).startOf('date');
  const end = moment(dayMoment).endOf('date');
  const hoursRange = moment.range(start, end);
  const hours = Array.from(hoursRange.by('hours'));
  return hours;
}