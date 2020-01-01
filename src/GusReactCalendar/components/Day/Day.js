import React from 'react';
import PropTypes from 'prop-types';

import CalendarCell from '../CalendarCell';
import HourCell from '../HourCell';
import Bar from '../Bar';
import Spot from '../Spot';
import { getHoursInDay } from '../../../utils/DateUtils';
import { calculateSpotPositionInDay, calculateBarPositionInDay } from '../../../utils/formatter';
import { DAY_LABEL_WIDTH_PERCENT, CELL_BORDER_WIDTH } from '../../constants';

function adjustLeftPostion(leftPercent) {
  return `calc(${leftPercent + DAY_LABEL_WIDTH_PERCENT}% - ${CELL_BORDER_WIDTH})`;
}

const Day = ({ day, data }) => {
  const hoursInDay = getHoursInDay(day);
  return (
    <div className="day-row">
      <CalendarCell withBorder={false} size={1}>
        <div className="cell-label">{day.format('DD')}</div>
      </CalendarCell>
      {hoursInDay.map(h => <HourCell key={h.hour()} />)}
      {data.map(d => {
        if (d.type === "bar") {
          const { width, left } = calculateBarPositionInDay({ start: d.start, end: d.end, day });
          return <Bar width={`${width}%`} left={adjustLeftPostion(left)} color={d.color} />
        }
        if (d.type === "spot") {
          const left = calculateSpotPositionInDay({ time: d.time, day });
          return <Spot color={d.color} left={adjustLeftPostion(left)} />
        }
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