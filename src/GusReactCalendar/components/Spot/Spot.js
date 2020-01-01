import React from 'react';
import PropTypes from 'prop-types';

const Spot = ({ color, left, right, size, top }) => (
  <div style={{ 
    position: 'absolute',
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: '50%',
    top,
    zIndex: 2000,
    left,
    right,
  }} />
);

Spot.propTypes = {
  color: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  size: PropTypes.string,
  top: PropTypes.string,
};

Spot.defaultProps = {
  color: 'red',
  left: 'auto',
  right: 'auto',
  size: '8px',
  top: 'calc(50% - 4px)',
};

export default Spot;