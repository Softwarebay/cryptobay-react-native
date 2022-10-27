import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Label } from '../../atoms';
import { styles } from './NetworkItem.style';

type NetworkItemProps = {
  networkName: string;
  networkColor: string;
  style?: ViewStyle | ViewStyle[];
};

export const NetworkItem: React.FC<NetworkItemProps> = ({
  networkName,
  networkColor,
  style,
}: NetworkItemProps) => {
  const dotColorStyle = { backgroundColor: networkColor } as ViewStyle;

  return (
    <View style={style}>
      <View style={styles.contentWrapper}>
        <View style={[styles.dot, dotColorStyle]} />
        <Label variant="secondary" value={networkName} />
      </View>

      {/* Icon */}
    </View>
  );
};
