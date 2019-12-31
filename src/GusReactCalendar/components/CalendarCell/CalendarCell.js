import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CalendarCell = ({ withBorder, size, children }) => {
  return (
    <div className={classnames('calendar-cell', {'no-border': !withBorder }, `size-${size}`)}>
      {children}
    </div>
  );
};

CalendarCell.propTypes = {
  withBorder: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.number,
};
CalendarCell.defaultProps = {
  withBorder: true,
  children: null,
  size: 1,
};

export default CalendarCell;