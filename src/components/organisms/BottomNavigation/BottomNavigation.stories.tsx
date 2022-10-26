import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';
import { Screens } from '../../../screens.enum';

import { BottomNavigation } from './BottomNavigation';

storiesOf('Organisms/BottomNavigation', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Bottom Navigation', () => (
    <BottomNavigation
      routeName={Screens.HOME}
      onHomeNavigate={action('onHomeNavigate')}
      onSwapNavigate={action('onSwapNavigate')}
      onSettingsNavigate={action('onSettingsNavigate')}
    />
  ));
