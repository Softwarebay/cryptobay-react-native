import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';
import { bnbSwapsHistory } from '../../../mocks';
import { Label } from '../../atoms';
import { SwapsList } from '../SwapsList/SwapsList';
import { ModalLayout } from './ModalLayout';

storiesOf('Organisms/ModalLayout', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Modal Layout default', () => (
    <ModalLayout onPressModal={action('onPressModal')}>
      <Label value="Modal" />
      <SwapsList
        tokenShortName="BNB"
        swapsHistory={bnbSwapsHistory}
        onPressDetails={action('onPressDetails')}
      />
      <Label value="Example Modal Component" variant="secondary" />
    </ModalLayout>
  ))
  .add('Modal Layout custom size by flex', () => (
    <ModalLayout
      blurFlexValue={number('blurFlexValue', 1)}
      contentFlexValue={number('contentFlexValue', 1)}
      onPressModal={action('onPressModal')}>
      <Label value="Modal" />
      <Label value="Example Modal Component" variant="secondary" />
    </ModalLayout>
  ));
