import React from 'react';
import PropTypes from 'prop-types';

import CalendarCell from '../CalendarCell';

const HourCell = () => {
  return (
    <CalendarCell>
    </CalendarCell>
  );
};

HourCell.propTypes = {
  hour: PropTypes.object,
  nextHour: PropTypes.object,
  data: PropTypes.object
}

export default HourCell;