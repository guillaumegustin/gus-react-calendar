import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import GusReactCalendar from './index';

storiesOf('GusReactCalendar', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .addDecorator(withKnobs)
  .add('display default', () => (
    <GusReactCalendar
      year={number('year', 2019)}  
      month={number('month', 12)}
    >
    </GusReactCalendar>
  ));
  
