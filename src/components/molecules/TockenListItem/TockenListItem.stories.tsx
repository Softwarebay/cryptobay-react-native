import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import StorybookView from '../../../../storybook/StorybookView';
import { TockenListItem } from './TockenListItem';

storiesOf('Molecules/TockenListItem', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Item', () => (
    <TockenListItem
      tockenPicture={0}
      tockenName={text('tockenName', 'Binance Coin')}
      tockenDolarValue={text('tockenDolarVale', '$226.69')}
      tockenPercentValueChange={number('tockenPercentValueChange', 2)}
      tockenValue={text('tockenValue', '19.2371 BNB')}
    />
  ));
