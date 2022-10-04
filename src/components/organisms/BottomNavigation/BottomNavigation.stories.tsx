import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { BottomNavigation } from './BottomNavigation';

storiesOf('Organisms/BottomNavigation', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Bottom Navigation', () => <BottomNavigation />);
