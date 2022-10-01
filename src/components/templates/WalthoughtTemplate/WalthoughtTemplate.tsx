import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { WalthoughtCarousel } from '../../organisms';

import { styles } from './WalthoughtTemplate.styles';

type WalthoughtTemplateProps = {
  onNavigate: () => void;
};

export const WalthoughtTemplate: React.FC<WalthoughtTemplateProps> = ({
  onNavigate,
}: WalthoughtTemplateProps) => {
  return (
    <SafeAreaView style={styles.walthoughtTemplate}>
      <View style={styles.contentWrapper}>
        <WalthoughtCarousel onNavigate={onNavigate} />
      </View>
    </SafeAreaView>
  );
};
