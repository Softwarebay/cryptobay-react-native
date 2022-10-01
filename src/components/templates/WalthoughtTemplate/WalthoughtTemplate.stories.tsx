import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { WalthoughtTemplate } from './WalthoughtTemplate';

storiesOf('Templates/WalthoughtCarousel', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Walthought Template', () => (
    <WalthoughtTemplate onNavigate={action('onNavigate')} />
  ));
