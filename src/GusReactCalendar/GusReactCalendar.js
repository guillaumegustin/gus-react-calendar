import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import Day from './components/Day';
import HoursHeader from './components/HoursHeader';

import {moment, setMomentLocale} from './utils/moment';
import { getDaysForMonth, getMonthLabel } from './utils/DateUtils';
import { dataByDay } from './utils/formatter';
import './styles.scss';

const GusReactCalendar = ({ year, month, data, locale }) => {
  setMomentLocale(locale);
  const days = getDaysForMonth(year, month);
  const seriesByDay = dataByDay(data);
  return (
    <div className="month-container">
      <div className="month-header">
        <div className="month-label calendar-title">{getMonthLabel({month, year})}</div>
        <HoursHeader />
      </div>
      {days.reverse().map(day => {
        const dayFormatted = day.format('YYYYMMDD');
        const dayData = seriesByDay[dayFormatted];
        return (
          <Day key={uniqid()} day={day} data={dayData || []} />
        );
      })}
    </div>
  );
};

GusReactCalendar.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
  locale: PropTypes.oneOf(['fr', 'en']),
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

GusReactCalendar.defaultProps = {
  year: moment().year(),
  month: moment().month(),
  locale: 'en',
  data: [],
};

export default GusReactCalendar;
