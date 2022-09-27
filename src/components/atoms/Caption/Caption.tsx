import React from 'react';
import { Text } from 'react-native';

import { styles } from './Caption.styles';

type CaptionProps = {
  value: string;
  variant?: 'gray' | 'white';
  testID?: string;
};

export const Caption: React.FC<CaptionProps> = ({
  value,
  variant = 'gray',
  testID,
}: CaptionProps) => {
  return (
    <Text testID={testID} style={[styles.caption, styles[variant]]}>
      {value}
    </Text>
  );
};
