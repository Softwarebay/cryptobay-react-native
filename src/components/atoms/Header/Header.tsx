import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './Header.styles';

type HeaderProps = {
  value: string;
  variant?: 'gradient' | 'white';
  testID?: string;
};

export const Header: React.FC<HeaderProps> = ({
  value,
  variant = 'gradient',
  testID,
}) => {
  if (variant === 'white') {
    return (
      <Text testID={testID} style={[styles.header, styles.white]}>
        {value}
      </Text>
    );
  }

  return (
    <MaskedView
      maskElement={
        <Text testID={testID} style={[styles.header, styles.gradient]}>
          {value}
        </Text>
      }>
      <LinearGradient
        colors={['#A9CDFF', '#72F6D1', '#A0ED8D', '#FED365', '#FAA49E']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Text style={[styles.header, styles.gradient, styles.opacityZero]}>
          {value}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};
