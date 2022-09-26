import React from 'react';
import { View } from 'react-native';

import { styles } from './Dot.styles';

type DotProps = {
  size?: number;
  color?: `#${string}`;
  testID?: string;
};

export const Dot: React.FC<DotProps> = ({ size, color, testID }: DotProps) => {
  const handleStyleByProps = {
    width: size,
    height: size,
    backgroundColor: color,
  };

  return <View testID={testID} style={[styles.dot, handleStyleByProps]} />;
};

Dot.defaultProps = {
  size: 6,
  color: '#FFFFFF',
};
