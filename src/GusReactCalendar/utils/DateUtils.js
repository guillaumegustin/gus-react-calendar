import { moment, isLocaleHandled } from './moment';

export const getMonthLabel = ({month, year}, locale) => {
  const d = moment().month((month - 1)).year(year);
  if (locale && isLocaleHandled(locale)) d.locale(locale);
  return d.format('MMMM YYYY');
};

export const formatMonth = (month) => {
  return `${month}`.length === 1 ? `0${month}` : `${month}`;
}

export const getDaysForMonth = (year, month) => {
  const startDate = moment(`${year}${formatMonth(month)}01`);
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