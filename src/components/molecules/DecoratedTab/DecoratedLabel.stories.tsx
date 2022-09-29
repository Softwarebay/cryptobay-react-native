import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { DecoratedTab } from './DecoratedTab';

storiesOf('Molecules/DecoratedTab', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Unchecked Decorated Tab', () => (
    <DecoratedTab
      label={text('label', 'Collectibles')}
      checked={false}
      onPress={action('onPress')}
    />
  ))
  .add('Checked Decorated Tab', () => (
    <DecoratedTab
      label={text('label', 'Token')}
      checked={true}
      onPress={action('onPress')}
    />
  ));
