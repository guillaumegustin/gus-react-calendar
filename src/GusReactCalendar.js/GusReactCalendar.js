import React from 'react';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';

import HourCell from './components/HourCell';

import { getDaysForMonth, getHoursInDay } from '../utils/DateUtils';

import './styles.scss';
const moment = extendMoment(Moment);

// const hoursInday = [];
// for (let i = 1; i < 24; i++) hoursInday.push(i);

const data = [{
  title: 'Tétée',
  type: 'bar',
  color: 'blue',
  serie: [{
    start: "2019-12-01 4:30",
    end: "2019-12-01 5:40",
  }, {
    start: "2019-12-01 06:30",
    end: "2019-12-01 07:45",
  },
  {
    start: "2019-12-01 09:30",
    end: "2019-12-01 10:50",
  }]
}, {
  title: 'change',
  type: 'spot',
  color: 'red',
  serie: [{
    date: "2019-12-01 04:20",
  },{
    date: "2019-12-01 05:40",
  },{
    date: "2019-12-01 06:50",
  },{
    date: "2019-12-01 09:10",
  }]
}];

function serieByDate(entry) {
  const { serie, title, type, color } = entry;
  return serie.reduce((acc, current) => {
    const date = current.date || current.start;
    const formatedDate = moment(date).format('YYYYMMDD');
    if (!acc[formatedDate]) acc[formatedDate] = [];
    acc[formatedDate].push({
      ...current,
      title,
      type,
      color,
    });
    return acc;
  }, {})
}

const GusReactCalendar = ({ year, month }) => {
  const days = getDaysForMonth(year, month);
  console.log('days', days);

  const dataByDay = data.reduce((acc, current) => {
    const serieDataByDate = serieByDate(current);
    Object.keys(serieDataByDate).forEach(k => {
      if (!acc[k]) acc[k] = [];
      acc[k] = [...acc[k], ...serieDataByDate[k]];
    });
    return acc;
  }, {});

  return (
    <div className="month-container">
      {days.map(day => {
        const dayFormatted = day.format('YYYYMMDD');
        const dayData = dataByDay[dayFormatted];
        console.log(dayFormatted, { [dayFormatted]: dayData });
        return  (
          <div key={day.date()} className="day-row">
            {getHoursInDay(day).map(h => (
              <HourCell key={h} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default GusReactCalendar;
