import React from 'react';
import { Text, TextStyle } from 'react-native';

import { styles } from './Badge.styles';

type BadgeProps = {
  value: number;
  style?: TextStyle | TextStyle[];
  testID?: string;
};

export const Badge: React.FC<BadgeProps> = ({
  value,
  style,
  testID,
}: BadgeProps) => {
  const variant = value >= 0 ? 'green' : 'red';
  const handlePositiveValuePlus = value >= 0 && '+';

  return (
    <Text testID={testID} style={[styles.badge, styles[variant], style]}>
      {handlePositiveValuePlus}
      {value}%
    </Text>
  );
};
