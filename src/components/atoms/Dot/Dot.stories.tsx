import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { Dot } from './Dot';

storiesOf('Atoms/Dot', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Default Dot', () => <Dot />)
  .add('Dot With Props', () => (
    <Dot
      size={number('size', 18)}
      color={text('color', '#FEBF32') as `#${string}`}
    />
  ));
