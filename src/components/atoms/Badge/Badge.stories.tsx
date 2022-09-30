import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { Badge } from './Badge';

storiesOf('Atoms/Badge', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Green Badge', () => <Badge value={number('value', 4.3)} />)
  .add('Red Badge', () => <Badge value={number('value', -1.3)} />);
