import { action } from '@storybook/addon-actions';
import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';
import { tokensMock } from '../../../mocks';

import { HomeTemplate } from './HomeTemplate';

storiesOf('Templates/HomeTemplate', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Home Template', () => (
    <HomeTemplate
      tokenName={text('tokenName', 'Etherium')}
      tokenShortName={text('tokenShortName', 'ETH')}
      tokenPrice={number('tokenPrice', 16858.15)}
      tokenPercentagePoint={number('tokenPercentagePoint', 0.7)}
      tokenValue={number('tokenValue', 9.2362)}
      tokens={tokensMock}
      routeName={text('routeName', 'Home')}
      onPressDropDown={action('onPressDropDown')}
      onPressSent={action('onPressSent')}
      onPressRecive={action('onPressRecive')}
      onPressBuy={action('onPressBuy')}
      onPressAddToken={action('onPressAddToken')}
      onHomeNavigate={action('onHomeNavigate')}
      onSwapNavigate={action('onSwapNavigate')}
      onSettingsNavigate={action('onSettingsNavigate')}
      onPressToken={action('onPressToken')}
    />
  ));
