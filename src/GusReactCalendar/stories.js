import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withKnobs, number, text } from '@storybook/addon-knobs';

import { data } from './utils/___test___/mock'

import GusReactCalendar from './index';

storiesOf('GusReactCalendar', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .addDecorator(withKnobs)
  .add('display default', () => (
    <div>
      <GusReactCalendar
        year={number('year', 2019)}  
        month={number('month.1', 12)}
        locale={text('locale', 'en')}
        data={data}
      >
      </GusReactCalendar>
      <br/>
      <GusReactCalendar
        year={number('year', 2019)}  
        month={number('month.2', 11)}
        locale={text('locale', 'en')}
        data={data}
      >
      </GusReactCalendar>
    </div>
  ));
  
