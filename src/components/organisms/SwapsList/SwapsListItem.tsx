import React from 'react';
import { View } from 'react-native';

import { Swap } from '../../../types/swap.type';
import { Badge, Caption, Icon, Icons, Label } from '../../atoms';

import { styles } from './SwapsListItem.styles';

type SwapsListItemProps = Swap & { tokenShortName: string };

export const SwapsListItem: React.FC<SwapsListItemProps> = ({
  tokenShortName,
  date,
  operation,
  status,
  value,
  valueInDolar,
}: SwapsListItemProps) => {
  const iconColorByStatus = status === 'Confirmed' ? '#76E268' : '#EA3943';
  const rotateIconByOperation = operation === 'Received' && {
    transform: [{ rotate: '180deg' }],
  };
  const operationLabel = `${operation} ${tokenShortName}`;
  const badgeColorByStatus = status === 'Confirmed' ? 'green' : 'red';
  const valueLabel = `${value} ${tokenShortName}`;
  const dolarCaption = `$${valueInDolar}`;

  return (
    <View style={styles.swapListItem}>
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
    </View>
  );
};
