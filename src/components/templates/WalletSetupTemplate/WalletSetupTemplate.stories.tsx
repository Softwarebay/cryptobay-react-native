import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { WalletSetupTemplate } from './WalletSetupTemplate';

storiesOf('Templates/WalletSetupTemplate', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Wallet Setup Template', () => (
    <WalletSetupTemplate
      onImportUsingSeedPhrase={action('onImportUsingSeedPhrase')}
      onCreateANewWallet={action('onCreateANewWallet')}
    />
  ));
