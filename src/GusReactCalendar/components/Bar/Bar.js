import React from 'react';
import PropTypes from 'prop-types';

const Bar = ({ width, color, left, right }) => (
  <div style={{ 
    position: 'absolute',
    top: '0',
    bottom: '0',
    left,
    right,
    width, 
    backgroundColor: color, 
    height: '100%',
    zIndex: 1000,
    padding: '0 -3px',
  }} />
);

Bar.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
}

Bar.defaultProps = {
  width: '100%',
  color: 'blue',
  left: 'auto',
  right: 'auto',
}

export default Bar;