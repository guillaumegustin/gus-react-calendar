import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);
export const momentFormat = 'YYYY-MM-DD HH:mm';

function minutesToPercent(minutes) {
  return Math.round(minutes * 100 / 60);
}

function makeMoment(time) {
  return moment.isMoment(time) ? time : moment(time);
}

function addToMapByDate(map, date, value) {
  if(!map[date]) map[date] = [];
  map[date].push(value);
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

    if(current.start && current.end) {
      const endDate = moment(current.end, momentFormat);
      const monthRange = moment.range(date.startOf('date'), endDate.startOf('date'))
      const days =  Array.from(monthRange.by('days'));
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

export const filterDataSerieWithinHourRange = (serie, hMin, hMax) => {
  const hourMin = makeMoment(hMin);
  const hourMax = makeMoment(hMax);
  return serie.filter(d => {
    const date = moment(d.start || d.time || d.date, momentFormat);
    const endDate = d.end ? moment(d.end, momentFormat) : null;
    // console.log(`gustest - hourMin:${hourMin.hour()}, hourMax: ${hourMax ? hourMax.hour(): 'null'}`)
    // console.log(`gustest - date:${date.hour()}, endDate: ${endDate ? endDate.hour(): 'null'}`)
    if(endDate) {  //range
     return  (date.isSameOrBefore(hourMin) && endDate.isAfter(hourMin))
      || (date.isSameOrAfter(hourMin) && (hourMax ? date.isBefore(hourMax) : true) )
    }
    return (date.isSameOrAfter(hourMin) && (hourMax ? date.isBefore(hourMax) : true));
  })
}

export const dataSpotLeftPercentInHour = (time, hourMin) => {
  const minutesDiff = makeMoment(time).diff(makeMoment(hourMin), 'minutes');
  const result = minutesToPercent(minutesDiff);
  return result > 0 ? (result <= 100 ? result : 100) : 0;
}

export const positionPercentInHour = (start, end, hourMin, hourMax) => {

  // if (!hourMax) return {
  //   left: 0,
  //   width: 0,
  // }

  const startMoment = moment.isMoment(start) ? start : moment(start);
  const endMoment = moment.isMoment(end) ? end : moment(end);

  const hourMinMoment = makeMoment(hourMin);
  const hourMaxMoment = hourMax !== null ? makeMoment(hourMax) : null;

  const left = startMoment.isSameOrBefore(hourMinMoment) ? 0 : minutesToPercent(startMoment.diff(hourMinMoment, 'minutes'));
  const width = hourMaxMoment === null 
    ? (100 - left)
    : (endMoment.isSameOrAfter(hourMaxMoment) ? (100 - left) : (100 - minutesToPercent(hourMaxMoment.diff(endMoment, 'minutes')) - left));
  // console.log(`gustest start=${startMoment}, end=${end}, hourMin=${hourMin} => LEFT=${left}`)
  // console.log(`gustest start=${startMoment}, end=${end}, hourMax=${hourMax} => WIDTH=${width}`)
  return {
    left,
    width,
  }
}
