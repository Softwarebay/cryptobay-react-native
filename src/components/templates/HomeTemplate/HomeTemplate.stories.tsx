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
      tokenName={text('tokenName', 'Etherium')}
      tokenShortName={text('tokenShortName', 'ETH')}
      tokenPrice={number('tokenPrice', 16858.15)}
      tokenPercentagePoint={number('tokenPercentagePoint', 0.7)}
      tokenValue={number('tokenValue', 9.2362)}
      tokens={tokensMock}
      onDropDown={action('onDropDown')}
      onSent={action('onSent')}
      onRecive={action('onRecive')}
      onBuy={action('onBuy')}
      onAddToken={action('onAddToken')}
    />
  ));
