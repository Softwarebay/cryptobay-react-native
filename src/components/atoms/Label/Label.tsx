import React from 'react';
import { Text, TextStyle } from 'react-native';

import { styles } from './Label.styles';

type LabelProps = {
  value: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  style?: TextStyle;
  testID?: string;
};

export const Label: React.FC<LabelProps> = ({
  value,
  variant = 'primary',
  style,
  testID,
}: LabelProps) => {
  const customStyle = style ? style : { color: '#FFFFFF' };

  return (
    <Text testID={testID} style={[styles.label, styles[variant], customStyle]}>
      {value}
    </Text>
  );
};
