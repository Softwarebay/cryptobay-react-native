import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { Label } from './Label';

storiesOf('Atoms/Label', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Default Label', () => <Label value={text('value', '19.2371 BNB')} />)
  .add('Title Label', () => (
    <Label
      value={text('value', 'Millions of people participate')}
      fontSize={number('fontSize', 40)}
      lineHeight={number('lineHeight', 56)}
      color={text('color', '#FEBF32') as `#${string}`}
      fontWeight={text('fontWeight', '300') as '300'}
    />
  ))
  .add('Button Label', () => (
    <Label
      value={text('value', 'Next')}
      color={text('color', '#FEBF32') as `#${string}`}
    />
  ))
  .add('Dolar Label', () => (
    <Label
      value={text('value', '$226.69')}
      fontSize={number('fontSize', 12)}
      lineHeight={number('lineHeight', 18)}
      color={text('color', '#ABAFC4') as `#${string}`}
      fontWeight={text('fontWeight', '400') as '400'}
    />
  ));
