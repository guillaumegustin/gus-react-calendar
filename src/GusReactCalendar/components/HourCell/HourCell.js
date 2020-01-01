import React from 'react';
import PropTypes from 'prop-types';

import CalendarCell from '../CalendarCell';
import Bar from '../Bar';
import Spot from '../Spot';
import { dataSpotLeftPercentInHour, positionPercentInHour } from '../../../utils/formatter';

const HourCell = ({ data, hour, nextHour }) => {
  return (
    <CalendarCell>
      {/* {data.map(d => {
        if (d.type === "bar") {
          const { width, left } = positionPercentInHour(d.start, d.end, hour, nextHour)
          return <Bar width={`${width}%`} left={`${left}%`} color={d.color} />
        }
        if (d.type === "spot") {
          const percent = dataSpotLeftPercentInHour(d.time, hour);
          return <Spot color={d.color} left={`${percent}%`} />
        }
      })} */}
    </CalendarCell>
  );
};

HourCell.propTypes = {
  hour: PropTypes.object,
  nextHour: PropTypes.object,
  data: PropTypes.object
}

export default HourCell;