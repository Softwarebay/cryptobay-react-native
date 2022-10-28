import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';
import { accountListMock } from '../../../mocks';

import { AccountModalTemplate } from './AccountModalTemplate';

storiesOf('Templates/AccountModalTemplate', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Account Modal Template', () => (
    <AccountModalTemplate
      accountList={accountListMock}
      onPressBack={action('onPressBack')}
      onPressCreateNewAccount={action('onPressCreateNewAccount')}
      onPressImportAccount={action('onPressImportAccount')}
    />
  ));
