import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

function minutesToPercent(minutes) {
  return Math.round(minutes * 100 / 60);
}

export const serieByDate = ({ serie, title, type, color }) => {
  return serie.reduce((acc, current) => {
    const date = current.date || current.start || current.time;
    
    const formatedDate = moment(date).format('YYYYMMDD');
    if (!acc[formatedDate]) acc[formatedDate] = [];
    acc[formatedDate].push({
      ...current,
      title,
      type,
      color,
    });
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

export const filterDataWithinHourRange = (data, hourMin, hourMax) => {
  return data.filter(d => {
    const date = moment(d.start || d.time || d.date);
    const endDate = d.end ? moment(d.end) : null;
    // console.log(`gustest - hourMin:${hourMin.hour()}, hourMax: ${hourMax ? hourMax.hour(): 'null'}`)
    // console.log(`gustest - date:${date.hour()}, endDate: ${endDate ? endDate.hour(): 'null'}`)
    if(endDate) {  //range
     return  (date.isSameOrBefore(hourMin) && endDate.isAfter(hourMin))
      || (date.isSameOrAfter(hourMin) && (hourMax ? date.isBefore(hourMax) : true) )
    }
    return (date.isSameOrAfter(hourMin) && (hourMax ? date.isBefore(hourMax) : true));
  })
}

export const dataSpotWidthPercent = (time, hourMin) => {
  const minutesDiff = moment(time).diff(hourMin, 'minutes');
  return minutesToPercent(minutesDiff);
}

export const dataRangePosition = (start, end, hourMin, hourMax) => {

  if (!hourMax) return {
    left: 0,
    width: 0,
  }

  const startMoment = moment(start);
  const endMoment = moment(end);

  const left = startMoment.isSameOrBefore(hourMin) ? 0 : minutesToPercent(startMoment.diff(hourMin, 'minutes'));
  const width = endMoment.isSameOrAfter(hourMax) ? (100 - left) : (100 - minutesToPercent(hourMax.diff(endMoment, 'minutes')) - left);
  // console.log(`gustest start=${start}, end=${end}, hourMin=${hourMin} => LEFT=${left}`)
  // console.log(`gustest start=${start}, end=${end}, hourMin=${hourMin} => WIDTH=${width}`)
  return {
    left,
    width,
  }
}
