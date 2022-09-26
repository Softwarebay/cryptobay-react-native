import React from 'react';
import { Text } from 'react-native';

import { styles } from './Label.styles';

type LabelProps = {
  value: string;
  testID?: string;
  fontSize?: number;
  lineHeight?: number;
  color?: `#${string}`;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
};

export const Label: React.FC<LabelProps> = ({
  value,
  testID,
  fontSize,
  lineHeight,
  color,
  fontWeight,
}: LabelProps) => {
  const handleStyleByProps = {
    fontSize: fontSize,
    lineHeight: lineHeight,
    color: color,
    fontWeight: fontWeight,
  };

  return (
    <Text testID={testID} style={[handleStyleByProps, styles.label]}>
      {value}
    </Text>
  );
};

Label.defaultProps = {
  fontSize: 16,
  lineHeight: 24,
  color: '#FFFFFF',
  fontWeight: '600',
};
