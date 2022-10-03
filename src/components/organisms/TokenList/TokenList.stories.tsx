import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { TokenList } from './TokenList';

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

storiesOf('Organisms/TokenList', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Token List', () => <TokenList tokens={tockensMock} />);
