import React from 'react';
import { View } from 'react-native';

import { WalthoughtCarousel } from '../../organisms';

import { styles } from './WalthoughtTemplate.styles';

type WalthoughtTemplateProps = {
  onNavigate: () => void;
};

export const WalthoughtTemplate: React.FC<WalthoughtTemplateProps> = ({
  onNavigate,
}: WalthoughtTemplateProps) => {
  return (
    <View style={styles.walthoughtTemplate}>
      <WalthoughtCarousel onNavigate={onNavigate} />
    </View>
  );
};
