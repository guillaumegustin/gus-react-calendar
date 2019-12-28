import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import HourCell from '../HourCell';
import { getHoursInDay } from '../../../utils/DateUtils';
import { filterDataWithinHourRange } from '../../../utils/formatter';


const Day = ({ day, data }) => {
  const hoursInDay = getHoursInDay(day);
  const nbHours = hoursInDay.length;
  return (
    <div className="day-row">
      {hoursInDay.map((h, i) => {
        const isLast = i === nbHours - 1;
        const hourSuperior = isLast ? null : hoursInDay[i+1];
        const dataForThisHour = filterDataWithinHourRange(data, h, hourSuperior);
        return <HourCell key={h} hour={h} nextHour={hourSuperior}  data={dataForThisHour} />;
      })}
    </div>
  );
};

Day.propTypes = {
  day: PropTypes.shape({
    date: PropTypes.func,
  }),
  data: PropTypes.object
}

export default Day;