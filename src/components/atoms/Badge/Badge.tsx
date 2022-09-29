import React from 'react';
import { Text, TextStyle } from 'react-native';

import { styles } from './Badge.styles';

type BadgeProps = {
  value: string;
  variant: 'green' | 'red';
  style?: TextStyle;
  testID?: string;
};

export const Badge: React.FC<BadgeProps> = ({
  value,
  variant,
  style,
  testID,
}: BadgeProps) => {
  return (
    <Text testID={testID} style={[styles.badge, styles[variant], style]}>
      {value}
    </Text>
  );
};
