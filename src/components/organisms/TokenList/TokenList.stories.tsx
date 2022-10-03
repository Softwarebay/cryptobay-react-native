import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';
import { tokensMock } from '../../../mocks';

import { TokenList } from './TokenList';

storiesOf('Organisms/TokenList', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Token List', () => <TokenList tokens={tokensMock} />);
