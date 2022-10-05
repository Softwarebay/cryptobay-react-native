import { View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Swap } from '../../../types/swap.type';
import { SwapsListItem } from './SwapsListItem';
import { styles } from './SwapsList.styles';

type SwapsListProps = {
  tokenShortName: string;
  swapsHistory: Swap[];
};

export const SwapsList: React.FC<SwapsListProps> = ({
  tokenShortName,
  swapsHistory,
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
          />
        )}
      />
    </View>
  );
};
