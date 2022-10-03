import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { Badge } from './Badge';

storiesOf('Atoms/Badge', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Green Badge', () => (
    <Badge value={text('value', '+4.3%')} variant="green" />
  ))
  .add('Red Badge', () => (
    <Badge value={text('value', '-1.3%')} variant="red" />
  ))
  .add('Confirmed Badge', () => (
    <Badge value={text('value', 'Confirmed')} variant="green" />
  ))
  .add('Canceled Badge', () => (
    <Badge value={text('value', 'Cancelled')} variant="red" />
  ));
