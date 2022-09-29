import React from 'react';
import { Text, TextStyle } from 'react-native';

import { styles } from './Caption.styles';

type CaptionProps = {
  value: string;
  variant?: 'gray' | 'white';
  style?: TextStyle;
  testID?: string;
};

export const Caption: React.FC<CaptionProps> = ({
  value,
  variant = 'gray',
  style,
  testID,
}: CaptionProps) => {
  return (
    <Text testID={testID} style={[styles.caption, styles[variant], style]}>
      {value}
    </Text>
  );
};
