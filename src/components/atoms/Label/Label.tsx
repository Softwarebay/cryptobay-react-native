import React from 'react';
import { Text } from 'react-native';

import { styles } from './Label.styles';

type LabelProps = {
  value: string;
  testID?: string;
};

export const Label: React.FC<LabelProps> = ({ value, testID }: LabelProps) => {
  return (
    <Text testID={testID} style={styles.label}>
      {value}
    </Text>
  );
};
