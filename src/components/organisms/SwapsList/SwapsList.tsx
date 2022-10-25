import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Swap } from '../../../types/swap.type';

import { styles } from './SwapsList.styles';
import { SwapsListItem } from './SwapsListItem';
import { SwapDetails } from './swapDetails.type';

type SwapsListProps = {
  tokenShortName: string;
  swapsHistory: Swap[];
  onPressDetails: (swapDetails: SwapDetails) => void;
};

export const SwapsList: React.FC<SwapsListProps> = ({
  tokenShortName,
  swapsHistory,
  onPressDetails,
}: SwapsListProps) => {
  return (
    <View style={styles.swapsList}>
      <FlatList
        data={swapsHistory}
        renderItem={({ item }) => (
          <SwapsListItem
            tokenShortName={tokenShortName}
            date={item.date}
            operation={item.operation}
            status={item.status}
            value={item.value}
            valueInDolar={item.valueInDolar}
            from={item.from}
            to={item.to}
            onPressDetails={onPressDetails}
          />
        )}
      />
    </View>
  );
};
