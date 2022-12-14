import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { WalthoughtTemplate } from './WalthoughtTemplate';

storiesOf('Templates/WalthoughtTemplate', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Walthought Template', () => (
    <WalthoughtTemplate onCarouselSlidesEnd={action('onCarouselSlidesEnd')} />
  ));
