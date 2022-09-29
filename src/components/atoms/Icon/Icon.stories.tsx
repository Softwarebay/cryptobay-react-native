import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { Icon } from './Icon';
import { Icons } from './icons.enum';

const tickArrowBackStyle = {
  transform: [{ rotate: '90deg' }],
};

const spinArrowStyle = {
  transform: [{ rotate: '180deg' }],
};

storiesOf('Atoms/Icon', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Arrow Icon', () => <Icon type={Icons.ARROW} />)
  .add('Arrow Icon Recive Button', () => (
    <Icon type={Icons.ARROW} style={spinArrowStyle} />
  ))
  .add('Arrow Icon Green', () => (
    <Icon type={Icons.ARROW} width={40} height={40} color="#76E268" />
  ))
  .add('Arrow Icon Red', () => (
    <Icon
      type={Icons.ARROW}
      width={40}
      height={40}
      color="#EA3943"
      style={spinArrowStyle}
    />
  ))
  .add('Buy Icon', () => <Icon type={Icons.BUY} />)
  .add('Elipse Profile Icon', () => <Icon type={Icons.ELIPSE_PROFILE} />)
  .add('Settings Icon', () => <Icon type={Icons.SETTINGS} />)
  .add('Swap Icon', () => <Icon type={Icons.SWAP} />)
  .add('TickArrow', () => <Icon type={Icons.TICK_ARROW} />)
  .add('TickArrow Back', () => (
    <Icon type={Icons.TICK_ARROW} style={tickArrowBackStyle} />
  ))
  .add('Wallet Icon', () => <Icon type={Icons.WALLET} />)
  .add('Checked Wallet Icon', () => (
    <Icon type={Icons.WALLET} color="#FEBF32" />
  ));
