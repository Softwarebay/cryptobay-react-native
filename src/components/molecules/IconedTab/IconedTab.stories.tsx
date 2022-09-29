import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';
import { Icons } from '../../atoms/Icon/icons.enum';

import { IconedTab } from './IconedTab';

// Styles to better story view
const storyStyles = {
  borderWidth: 1,
  borderColor: 'white',
};

storiesOf('Molecules/IconedTab', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Unchecked Iconed Label', () => (
    <IconedTab
      label={text('label', 'Wallet')}
      checked={false}
      iconType={Icons.WALLET}
      onPress={action('onPress')}
      style={storyStyles}
    />
  ))
  .add('Checked Iconed Label', () => (
    <IconedTab
      label={text('label', 'Wallet')}
      checked={true}
      iconType={Icons.WALLET}
      onPress={action('onPress')}
      style={storyStyles}
    />
  ));
