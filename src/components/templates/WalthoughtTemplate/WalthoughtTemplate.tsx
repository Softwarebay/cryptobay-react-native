import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { WalthoughtCarousel } from '../../organisms';

import { styles } from './WalthoughtTemplate.styles';

type WalthoughtTemplateProps = {
  onCarouselSlidesEnd: () => void;
};

export const WalthoughtTemplate: React.FC<WalthoughtTemplateProps> = ({
  onCarouselSlidesEnd,
}: WalthoughtTemplateProps) => {
  return (
    <SafeAreaView style={styles.walthoughtTemplate}>
      <View style={styles.contentWrapper}>
        <WalthoughtCarousel onCarouselSlidesEnd={onCarouselSlidesEnd} />
      </View>
    </SafeAreaView>
  );
};
