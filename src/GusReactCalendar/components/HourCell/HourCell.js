import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { dataSpotWidthPercent, dataRangePosition } from '../../../utils/formatter';

const Bar = ({ width, color, left }) => (
  <div style={{ 
    position: 'absolute',
    top: '0',
    bottom: '0',
    left,
    width, 
    backgroundColor: color, 
    height: '100%', 
  }} />
)

const Spot = ({ color, left }) => (
  <div style={{ 
    position: 'absolute',
    width: '8px',
    height: '8px',
    backgroundColor: color,
    borderRadius: '50%',
    top: 'calc(50% - 4px)',
    zIndex: '99999',
    left,
  }} />
)

const HourCell = ({ hour, data, nextHour }) => {
  // console.log(`gustest hourData ${hour.hour()}`, data);
  return (
    <div className="hour-cell">
      {data.map(d => {
        if (d.type === "bar") {
          const { width, left } = dataRangePosition(d.start, d.end, hour, nextHour)
          return <Bar width={`${width}%`} left={`${left}%`} color={d.color} />
        }
        if (d.type === "spot") {
          const percent = dataSpotWidthPercent(d.time, hour);
          return <Spot color={d.color} left={`${percent}%`} />
        }
      })}
    </div>
  );
};

HourCell.propTypes = {
  hour: PropTypes.object,
  nextHour: PropTypes.object,
  data: PropTypes.object
}

export default HourCell;