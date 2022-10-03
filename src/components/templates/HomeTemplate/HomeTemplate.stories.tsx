import { action } from '@storybook/addon-actions';
import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { PROFILE } from '../../../../assets/pictures';
import StorybookView from '../../../../storybook/StorybookView';

import { HomeTemplate } from './HomeTemplate';

const tockensMock = [
  {
    picture: 0,
    name: 'Binance Coin',
    shortName: 'BNB',
    price: 226.69,
    percentagePoint: 2,
    value: 19.2371,
  },
  {
    picture: 0,
    name: 'USD Coin',
    shortName: 'USDC',
    price: 1.0,
    percentagePoint: 4.3,
    value: 92.3,
  },
  {
    picture: 0,
    name: 'Synthetix',
    shortName: 'SNX',
    price: 20.83,
    percentagePoint: -1.3,
    value: 42.74,
  },
];

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
      tokens={tockensMock}
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
