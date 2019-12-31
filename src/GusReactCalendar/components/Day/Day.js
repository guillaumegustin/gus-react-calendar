import React from 'react';
import PropTypes from 'prop-types';

import CalendarCell from '../CalendarCell';
import HourCell from '../HourCell';
import { getHoursInDay } from '../../../utils/DateUtils';
import { filterDataSerieWithinHourRange } from '../../../utils/formatter';

const Day = ({ day, data }) => {
  const hoursInDay = getHoursInDay(day);
  const nbHours = hoursInDay.length;
  return (
    <div className="day-row">
      <CalendarCell withBorder={false} size={2}>
        <div className="cell-label">{day.format('DD')}</div>
      </CalendarCell>
      {hoursInDay.map((h, i) => {
        const isLast = i === nbHours - 1;
        const hourSuperior = isLast ? null : hoursInDay[i+1];
        const dataForThisHour = filterDataSerieWithinHourRange(data, h, hourSuperior);
        return <HourCell key={h} hour={h} nextHour={hourSuperior}  data={dataForThisHour} />;
      })}
    </div>
  );
};

Day.propTypes = {
  day: PropTypes.shape({
    date: PropTypes.func,
    format: PropTypes.func,
  }),
  data: PropTypes.object
}

export default Day;