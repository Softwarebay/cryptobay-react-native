import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { Pressable, View } from 'react-native';

import { Badge, Caption, Label } from '../../atoms';

import { styles } from './DetailsModalTemplate.styles';

type DetailsModalTemplateProps = {
  operation: string;
  status: 'Confirmed' | 'Cancelled';
  date: string;
  from: string;
  to: string;
  totalAmount: string;
  totalAmountDolarValue: string;
  swapValue: string;
  networkFee: string;
  onGoBack: () => void;
};

export const DetailsModalTemplate: React.FC<DetailsModalTemplateProps> = ({
  operation,
  status,
  date,
  from,
  to,
  totalAmount,
  totalAmountDolarValue,
  swapValue,
  networkFee,
  onGoBack,
}) => {
  const badgeColorByStatus = status === 'Confirmed' ? 'green' : 'red';

  return (
    <Pressable
      testID="details-modal-template"
      style={styles.detailsModalScreen}
      onPress={onGoBack}>
      <BlurView style={styles.blur}>
        <View style={styles.indicator} />
      </BlurView>

      <View style={styles.detailsContent}>
        <Label style={styles.operationLabel} value={operation} />

        <View style={styles.contentSection}>
          <View style={styles.content}>
            <Caption value="Status" />
            <Caption value="Date" />
          </View>

          <View style={styles.content}>
            <Badge
              testID="details-modal-status-badge"
              value={status}
              variant={badgeColorByStatus}
            />
            <Caption value={date} />
          </View>
        </View>

        <View style={styles.contentSection}>
          <View style={styles.content}>
            <Caption value="From" />
            <Caption value="To" />
          </View>

          <View style={styles.content}>
            <Label value={from} variant="secondary" />
            <Label value={to} variant="secondary" />
          </View>
        </View>

        <View style={styles.summarySection}>
          {status === 'Cancelled' && swapValue && (
            <View
              style={[styles.summarySectionRow, styles.summaryCanceledDatat]}>
              <View style={styles.summaryDataFlex}>
                <Label value="Amount" variant="secondary" />
                <Label value={swapValue} variant="secondary" />
              </View>

              <View style={styles.summaryDataFlex}>
                <Label value="Network fee" variant="secondary" />
                <Label value={networkFee} variant="secondary" />
              </View>
            </View>
          )}

          <View style={styles.summarySectionRow}>
            <View style={styles.summaryDataFlex}>
              <Label value="Total Amount" />
              <Label value={totalAmount} />
            </View>

            <Caption
              style={styles.summaryTotalAmountDolars}
              value={totalAmountDolarValue}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};
