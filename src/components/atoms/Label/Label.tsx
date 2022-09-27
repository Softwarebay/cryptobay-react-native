import React from 'react';
import { Text } from 'react-native';

import { styles } from './Label.styles';

type LabelProps = {
  value: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  color?: string;
  testID?: string;
};

export const Label: React.FC<LabelProps> = ({
  value,
  variant = 'primary',
  color = '#FFFFFF',
  testID,
}: LabelProps) => {
  const colorStyles = { color: color };

  return (
    <Text testID={testID} style={[styles.label, styles[variant], colorStyles]}>
      {value}
    </Text>
  );
};
