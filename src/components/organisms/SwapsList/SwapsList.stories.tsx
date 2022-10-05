import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';
import { bnbSwapsHistory } from '../../../mocks';
import { SwapsList } from './SwapsList';

storiesOf('Organisms/SwapsList', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Swaps List', () => (
    <SwapsList
      tokenShortName={text('tokenShortName', 'BNB')}
      swapsHistory={bnbSwapsHistory}
    />
  ));
