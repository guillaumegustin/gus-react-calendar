import React from 'react';
import PropTypes from 'prop-types';

import Day from './components/Day';

import { getDaysForMonth } from '../utils/DateUtils';
import { data } from '../utils/___test___/mock'
import { dataByDay } from '../utils/formatter';
import HoursHeader from './components/HoursHeader';
import './styles.scss';

const GusReactCalendar = ({ year, month }) => {
  const days = getDaysForMonth(year, month);
  const seriesByDay = dataByDay(data);
  return (
    <div className="month-container">
      <HoursHeader />
      {days.map(day => {
        const dayFormatted = day.format('YYYYMMDD');
        const dayData = seriesByDay[dayFormatted];
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
