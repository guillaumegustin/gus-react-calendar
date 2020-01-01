import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import './styles.scss';

const Bar = ({ width, color, left, right, animationDuration }) => {
  const id = uniqid();
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.getElementById(id).style.width = `${width}`;
    }, 100);
    return () => {
      if (timeout) clearTimeout(timeout);
    }
  })

  return (
    <div id={id} className="calendar-bar" style={{ 
      left,
      right,
      width: 0,
      backgroundColor: color,
      transition: `width ${animationDuration}s ease-in-out`,
    }} />
  );
}

Bar.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  animationDuration: PropTypes.number,
}

Bar.defaultProps = {
  width: '100%',
  color: 'blue',
  left: 'auto',
  right: 'auto',
  animationDuration: 0.3,
}

export default Bar;