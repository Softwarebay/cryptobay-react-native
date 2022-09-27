import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { Header } from './Header';

storiesOf('Atoms/Header', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Gradient Header', () => (
    <Header value={text('value', 'Convenient Transaction')} />
  ))
  .add('White Header', () => (
    <Header
      value={text('value', 'Millionsof people participate')}
      variant="white"
    />
  ));
