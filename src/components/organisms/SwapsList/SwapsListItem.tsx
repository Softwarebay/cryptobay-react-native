import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Swap } from '../../../types/swap.type';
import { Badge, Caption, Icon, Icons, Label } from '../../atoms';

import { styles } from './SwapsListItem.styles';
import { SwapDetails } from './swapDetails.type';

type SwapsListItemProps = Swap & {
  tokenShortName: string;
  testID?: string;
  onPressDetails: (details: SwapDetails) => void;
};

export const SwapsListItem: React.FC<SwapsListItemProps> = ({
  tokenShortName,
  date,
  operation,
  status,
  value,
  valueInDolar,
  from,
  to,
  testID,
  onPressDetails,
}: SwapsListItemProps) => {
  const iconColorByStatus = status === 'Confirmed' ? '#76E268' : '#EA3943';
  const rotateIconByOperation = operation === 'Received' && {
    transform: [{ rotate: '180deg' }],
  };
  const operationLabel = `${operation} ${tokenShortName}`;
  const badgeColorByStatus = status === 'Confirmed' ? 'green' : 'red';
  const valueLabel = `${value} ${tokenShortName}`;
  const dolarCaption = `$${valueInDolar}`;

  const swapDetails = {
    shortName: tokenShortName,
    operation: operationLabel,
    status: status,
    date: date,
    value: value,
    from: from,
    to: to,
  } as SwapDetails;

  const handleOnPressDetails = () => onPressDetails(swapDetails);

  return (
    <TouchableOpacity
      testID={testID}
      style={styles.swapListItem}
      onPress={handleOnPressDetails}>
      <Caption value={date} />

      <View style={styles.contentWrapper}>
        <View style={styles.leftColumn}>
          <Icon
            type={Icons.ARROW}
            width={40}
            height={40}
            color={iconColorByStatus}
            style={rotateIconByOperation}
          />

          <View>
            <Label value={operationLabel} />
            <Badge value={status} variant={badgeColorByStatus} />
          </View>
        </View>

        <View>
          <Label value={valueLabel} />
          <Caption value={dolarCaption} style={styles.valueInDolar} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
