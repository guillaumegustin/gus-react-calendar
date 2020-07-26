import React from 'react';
import uniqid from 'uniqid';

import CalendarCell from '../CalendarCell';
import { getHoursInDay } from '../../utils/DateUtils';

import './styles.scss';

const HoursHeader = () => {
  return (
    <div className="header-row">
      <div className="header-row-content">
        {getHoursInDay().map((h, i) => {
          return (
            <div className="header-hour">
              <div className="header-hour-label">{i > 0 && i % 2 === 0 ? h.hour() : ''}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default HoursHeader;