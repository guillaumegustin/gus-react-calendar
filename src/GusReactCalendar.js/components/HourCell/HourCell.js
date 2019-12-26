import React from 'react';
import './styles.scss';
import { red } from 'ansi-colors';
const HourCell = () => {
  return (
    <div className="hour-cell">
      <div style={{ width: '80%', backgroundColor: 'red', height: '100%', margin: '-1px'}} />
    </div>
  );
};

export default HourCell;