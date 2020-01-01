import React from 'react';
import PropTypes from 'prop-types';

import Day from './components/Day';

import { getDaysForMonth } from '../utils/DateUtils';
import { dataByDay } from '../utils/formatter';
import HoursHeader from './components/HoursHeader';
import './styles.scss';

const GusReactCalendar = ({ year, month, data }) => {
  const days = getDaysForMonth(year, month);
  const seriesByDay = dataByDay(data);
  return (
    <div className="month-container">
      <HoursHeader />
      {days.reverse().map(day => {
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
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    serie: PropTypes.arrayOf(PropTypes.shape({
      start: PropTypes.string,
      end: PropTypes.string,
      time: PropTypes.string,
    }))
  }))
};

export default GusReactCalendar;
