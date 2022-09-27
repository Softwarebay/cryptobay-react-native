import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { Label } from './Label';

storiesOf('Atoms/Label', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Price Label', () => <Label value={text('value', '19.2371 BNB')} />);
