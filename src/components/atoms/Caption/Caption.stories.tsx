import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { Caption } from './Caption';

storiesOf('Atoms/Caption', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Gray Caption', () => <Caption value={text('value', '$9.58799')} />)
  .add('White Caption', () => (
    <Caption value={text('value', 'Mar 3 at 10:04am')} variant="white" />
  ));
