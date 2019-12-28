import React from 'react';
import PropTypes from 'prop-types';

import Day from './components/Day';
import HourCell from './components/HourCell';

import { getDaysForMonth, getHoursInDay } from '../utils/DateUtils';
import { data } from '../utils/___test___/mock'
import { dataByDay } from '../utils/formatter';

import './styles.scss';

function log(name, value) {
  // console.log(`gustest ${name}`, value);
}

const GusReactCalendar = ({ year, month }) => {
  const days = getDaysForMonth(year, month);
  const seriesByDay = dataByDay(data);
  return (
    <div className="month-container">
      {days.map(day => {
        const dayFormatted = day.format('YYYYMMDD');
        const dayData = seriesByDay[dayFormatted];
        log(dayFormatted, { [dayFormatted]: dayData });
        return (
          <Day key={day.date()} day={day} data={dayData || []} />
        );
      })}
    </div>
  );
};

GusReactCalendar.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
};

export default GusReactCalendar;
