import { action } from '@storybook/addon-actions';
import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';
import { bnbSwapsHistory } from '../../../mocks';

import { TokenTemplate } from './TokenTemplate';

storiesOf('Templates/TokenTemplate', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Token Template', () => (
    <TokenTemplate
      tokenShortName={text('tokenShortName', 'BNB')}
      tokenValue={number('tokenValue', 19.2371)}
      tokenPrice={number('tokenPrice', 4360.8582)}
      tokenSwapHistory={bnbSwapsHistory}
      routeName={text('routeName', 'Home')}
      onPressBack={action('onPressBack')}
      onPressSent={action('onPressSent')}
      onPressReceive={action('onPressReceive')}
      onHomeNavigate={action('onHomeNavigate')}
      onSwapNavigate={action('onSwapNavigate')}
      onSettingsNavigate={action('onSettingsNavigate')}
      onPressDetails={action('onPressDetails')}
    />
  ));
