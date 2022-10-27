import React from 'react';
import { View, ViewStyle } from 'react-native';

import { Icon, Icons, Label } from '../../atoms';

import { styles } from './NetworkItem.style';

type NetworkItemProps = {
  networkName: string;
  networkColor: string;
  variant?: 'default' | 'checked';
  style?: ViewStyle | ViewStyle[];
};

export const NetworkItem: React.FC<NetworkItemProps> = ({
  networkName,
  networkColor,
  variant = 'default',
  style,
}: NetworkItemProps) => {
  const dotColorStyle = { backgroundColor: networkColor } as ViewStyle;

  return (
    <View style={[style, styles.networkListItem]}>
      <View style={styles.contentWrapper}>
        <View style={[styles.dot, dotColorStyle]} />
        <Label variant="secondary" value={networkName} />
      </View>

      {variant === 'checked' && <Icon type={Icons.CHECK} />}
    </View>
  );
};
