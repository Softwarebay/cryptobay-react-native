import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { WalthoughtCarousel } from './WalthoughtCarousel';

storiesOf('Organisms/WalthoughtCarousel', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Walthought Carousel', () => (
    <WalthoughtCarousel onCarouselSlidesEnd={action('onCarouselSlidesEnd')} />
  ));
