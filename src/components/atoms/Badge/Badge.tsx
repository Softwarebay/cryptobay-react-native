import React from 'react';
import { Text } from 'react-native';

import { styles } from './Badge.styles';

type BadgeProps = {
  value: string;
  variant: 'green' | 'red';
  testID?: string;
};

export const Badge: React.FC<BadgeProps> = ({
  value,
  variant,
  testID,
}: BadgeProps) => {
  return (
    <Text testID={testID} style={[styles.badge, styles[variant]]}>
      {value}
    </Text>
  );
};
