import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import CalendarCell from '../CalendarCell';
import HourCell from '../HourCell';
import Bar from '../Bar';
import Spot from '../Spot';
import { calculateSpotPositionInDay, calculateBarPositionInDay } from '../../utils/formatter';
import { DAY_LABEL_WIDTH_PERCENT, CELL_BORDER_WIDTH } from '../../constants';


function adjustLeftPostion(leftPercent) {
  return `calc(${leftPercent}% + ${CELL_BORDER_WIDTH})`;
}

const Day = ({ day, data }) => {
  const hoursInDay = [];
  for (let i = 0; i <= 24; i++) {
    hoursInDay.push(i);
  }
  return (
    <div className="day-row">
      <CalendarCell withBorder={false} size={1}>
        <div className="cell-label">{day.format('DD')}</div>
      </CalendarCell>
      <div className="day-content">
        {hoursInDay.map(() => <HourCell key={uniqid()} />)}
        {data.map(d => {
          if (d.type === "bar") {
            const { width, left } = calculateBarPositionInDay({ start: d.start, end: d.end, day });
            return <Bar key={uniqid()} width={`${width}%`} left={adjustLeftPostion(left)} color={d.color} />
          }
          if (d.type === "spot") {
            const left = calculateSpotPositionInDay({ time: d.time, day });
            return <Spot key={uniqid()} color={d.color} left={adjustLeftPostion(left)} />
          }
        })}
      </div>
    </div>
  );
};

Day.propTypes = {
  day: PropTypes.shape({
    date: PropTypes.func,
    format: PropTypes.func,
  }),
  data: PropTypes.array,
}

export default Day;