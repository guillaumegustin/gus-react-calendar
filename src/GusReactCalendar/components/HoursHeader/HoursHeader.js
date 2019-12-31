import React from 'react';

import CalendarCell from '../CalendarCell';
import { getHoursInDay } from '../../../utils/DateUtils';

import './styles.scss';

const HoursHeader = () => {
  return (
    <div className="header-row">
      <CalendarCell size={3} withBorder={false} />
      {getHoursInDay().map((h, i) => {
        return (
          <CalendarCell key={i} withBorder={false}>
            {i % 2 === 1 && (
              <div>
                <div className="header-hour-label">{h.hour()}</div>
              </div>
            )}
          </CalendarCell>
        );
      })}
    </div>
  );
};

export default HoursHeader;