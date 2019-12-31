import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withKnobs, number } from '@storybook/addon-knobs';

import { data } from '../utils/___test___/mock'

import GusReactCalendar from './index';

storiesOf('GusReactCalendar', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .addDecorator(withKnobs)
  .add('display default', () => (
    <div>
      <h3>DECEMBER</h3>
      <GusReactCalendar
        year={number('year', 2019)}  
        month={number('month.1', 12)}
        data={data}
      >
      </GusReactCalendar>
      <h3>NOVEMBER</h3>
      <GusReactCalendar
        year={number('year', 2019)}  
        month={number('month.2', 11)}
        data={data}
      >
      </GusReactCalendar>
    </div>
  ));
  
