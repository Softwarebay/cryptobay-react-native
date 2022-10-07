import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import StorybookView from '../../../../storybook/StorybookView';

import { DetailsModalTemplate } from './DetailsModalTemplate';

storiesOf('Templates/DetailsModalTemplate', module)
  .addDecorator(getStory => <StorybookView>{getStory()}</StorybookView>)
  .add('Details Modal Template Confirmed', () => (
    <DetailsModalTemplate
      operation={text('operation', 'Recived BNB')}
      status={'Confirmed'}
      date={text('date', 'Mar 3 at 10:04am')}
      from={text('from', '0x3Dc6...DfCE')}
      to={text('to', '0x3Dc6...DfF9')}
      totalAmount={text('totalAmount', '2.56 BNB')}
      totalAmountDolarValue={text('totalAmountDolarValue', '$594.304')}
      swapValue={text('swapValue', '2.35 BNB')}
      networkFee={text('network Fee', '0.21 BNB')}
      onGoBack={action('onGoBack')}
    />
  ))
  .add('Details Modal Template Cancelled', () => (
    <DetailsModalTemplate
      operation={text('operation', 'Sent BNB')}
      status={'Cancelled'}
      date={text('date', 'Mar 3 at 10:04am')}
      from={text('from', '0x3Dc6...DfCE')}
      to={text('to', '0x3Dc6...DfF9')}
      totalAmount={text('totalAmount', '2.56 BNB')}
      totalAmountDolarValue={text('totalAmountDolarValue', '$594.304')}
      swapValue={text('swapValue', '2.35 BNB')}
      networkFee={text('network Fee', '0.21 BNB')}
      onGoBack={action('onGoBack')}
    />
  ));
