import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { Label } from './Label';

const customStyle = { color: '#FEBF32' };

storiesOf('Atoms/Label', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Primary Label', () => <Label value={text('value', '19.2371 BNB')} />)
  .add('Secondary Label', () => (
    <Label value={text('value', '0x3Dc6...DfF9')} variant="secondary" />
  ))
  .add('Tertiary Label', () => (
    <Label
      value={text('value', 'Wallet')}
      style={customStyle}
      variant="tertiary"
    />
  ));
