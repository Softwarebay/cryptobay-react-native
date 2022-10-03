import { action } from '@storybook/addon-actions';
import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { PROFILE } from '../../../../assets/pictures';
import StorybookView from '../../../../storybook/StorybookView';
import { tokensMock } from '../../../mocks';

import { HomeTemplate } from './HomeTemplate';

storiesOf('Templates/HomeTemplate', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Home Template', () => (
    <HomeTemplate
      profileAvatarPicture={PROFILE}
      currencyName={text('currencyName', 'Etherium')}
      currencyShortName={text('currencyShortName', 'ETH')}
      currencyPrice={number('currencyPrice', 16858.15)}
      currencyPercentagePoint={number('currencyPercentagePoint', 0.7)}
      currencyValue={number('currencyValue', 9.2362)}
      tokens={tokensMock}
      onDropDown={action('onDropDown')}
      onSent={action('onSent')}
      onRecive={action('onRecive')}
      onBuy={action('onBuy')}
      onAddToken={action('onAddToken')}
      onHomeNavigate={action('onHomeNavigate')}
      onSwapNavigate={action('onSwapNavigate')}
      onSettingsNavigate={action('onSettingsNavigate')}
    />
  ));
