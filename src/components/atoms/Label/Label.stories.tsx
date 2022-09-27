import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import StorybookView from '../../../../storybook/StorybookView';

import { Label } from './Label';

const yellowButtonTemplate = {
  backgroundColor: '#FEBF32',
  padding: 10,
  borderRadius: 10,
};

storiesOf('Atoms/Label', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Price Label', () => <Label value={text('value', '19.2371 BNB')} />)
  .add('Button Yellow Label', () => (
    <Label value={text('value', 'Next')} color="#FEBF32" />
  ))
  .add('Button Black Label', () => (
    <View style={yellowButtonTemplate}>
      <Label value={text('value', 'Create a new Wallet')} color="#000000" />
    </View>
  ));
