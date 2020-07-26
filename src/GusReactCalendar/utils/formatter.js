import { moment, makeMoment } from './moment';
import { SECONDS_IN_DAY } from '../constants';
export const momentFormat = 'YYYY-MM-DD HH:mm';

function addToMapByDate(map, date, value) {
  if (!map[date]) map[date] = [];
  map[date].push(value);
}

export const secondsToPercentDay = seconds => {
  return Math.abs(seconds) * 100 / SECONDS_IN_DAY;
}

export const serieByDate = ({ serie, title, type, color }) => {
  return serie.reduce((acc, current) => {
    const date = moment(current.date || current.start || current.time, momentFormat);
    const value = {
      ...current,
      title,
      type,
      color,
    };

    if (current.start && current.end) {
      const endDate = moment(current.end, momentFormat);
      const monthRange = moment.range(date.startOf('date'), endDate.startOf('date'))
      const days = Array.from(monthRange.by('days'));
      days.forEach(day => {
        const formatedDate = day.format('YYYYMMDD');
        addToMapByDate(acc, formatedDate, value);
      })
    } else {
      const formatedDate = date.format('YYYYMMDD');
      addToMapByDate(acc, formatedDate, value);
    }

    return acc;
  }, {});
};

export const dataByDay = (data) => {
  return data.reduce((acc, current) => {
    const serieDataByDate = serieByDate(current);

    Object.keys(serieDataByDate).forEach(k => {
      if (!acc[k]) acc[k] = [];
      acc[k] = [...acc[k], ...serieDataByDate[k]];
    });

    return acc;
  }, {});
};

export const calculateBarPositionInDay = ({ start, end, day }) => {
  const startMoment = makeMoment(start);
  const endMoment = makeMoment(end);
  const dayMomentStart = makeMoment(day).clone().startOf('date');
  const dayMomentEnd = makeMoment(day).clone().endOf('date');

  const left = startMoment.isBefore(dayMomentStart)
    ? 0
    : secondsToPercentDay(dayMomentStart.diff(startMoment, 'seconds'));

  const width = endMoment.isAfter(dayMomentEnd)
    ? (100 - left)
    : (100 - left - secondsToPercentDay(dayMomentEnd.diff(endMoment, 'seconds')))

  return {
    left,
    width,
  }
}

export const calculateSpotPositionInDay = ({ time, day }) => {
  const timeMoment = makeMoment(time);
  const dayMomentStart = makeMoment(day).clone().startOf('date');
  return secondsToPercentDay(timeMoment.diff(dayMomentStart, 'seconds'));
}
