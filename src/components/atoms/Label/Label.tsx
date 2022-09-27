import React from 'react';
import { Text } from 'react-native';

import { styles } from './Label.styles';

type LabelProps = {
  value: string;
  color?: string;
  testID?: string;
};

export const Label: React.FC<LabelProps> = ({
  value,
  color,
  testID,
}: LabelProps) => {
  const colorStyles = { color: color };

  return (
    <Text testID={testID} style={[styles.label, colorStyles]}>
      {value}
    </Text>
  );
};

Label.defaultProps = {
  color: '#FFFFFF',
};
