import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { CarouselSlideNavigation } from './CarouselSlideNavigation';

storiesOf('Atoms/CarouselSlideNavigation', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Carousel Slide Navigation', () => (
    <CarouselSlideNavigation slide={number('slide', 1) as 1 | 2 | 3} />
  ));
