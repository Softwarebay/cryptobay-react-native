import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';
import { Icons } from '../../atoms/Icon/icons.enum';

import { Button } from './Button';

const iconStyle = { marginRight: 8 };

storiesOf('Molecules/Button', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Dark Button', () => (
    <Button
      label={text('label', 'Get Start')}
      onPress={action('onPress Dark')}
    />
  ))
  .add('Bright Button', () => (
    <Button
      label={text('label', 'Create a New Wallet')}
      onPress={action('onPress Bright')}
      variant="bright"
    />
  ))
  .add('Dark Button With Icon', () => (
    <Button
      label={text('label', 'Buy')}
      onPress={action('onPress Dark with  Icon')}
      iconType={Icons.BUY}
      iconStyle={iconStyle}
    />
  ));
