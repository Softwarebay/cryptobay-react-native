import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { Icon } from './Icon';
import { Icons } from './icons.enum';

storiesOf('Atoms/Icon', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Arrow Down Icon', () => <Icon type={Icons.ARROW_DOWN} />)
  .add('Arrow Left Back Icon', () => <Icon type={Icons.ARROW_LEFT_BACK} />)
  .add('Arrow Right Recived Icon', () => (
    <Icon type={Icons.ARROW_RIGHT_RECIVED} />
  ))
  .add('Arrow Right Sent Icon', () => <Icon type={Icons.ARROW_RIGHT_SENT} />)
  .add('Buy Icon', () => <Icon type={Icons.BUY} />)
  .add('Settings Icon', () => <Icon type={Icons.SETTINGS} />)
  .add('Swap Icon', () => <Icon type={Icons.SWAP} />)
  .add('Wallet Icon', () => <Icon type={Icons.WALLET} />);
