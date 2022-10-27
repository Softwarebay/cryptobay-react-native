import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';
import { NetworkModalTemplate } from './NetworkModalTemplate';

storiesOf('Templates/NetworkTemplate', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Network Template', () => (
    <NetworkModalTemplate onPressClose={action('onPressClose')} />
  ));
