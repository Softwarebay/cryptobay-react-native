import React from 'react';
import { View } from 'react-native';

import { styles } from './CarouselSlideNavigation.styles';

type CarouselSlideNavigationProps = {
  slide: 1 | 2 | 3;
};

export const CarouselSlideNavigation: React.FC<
  CarouselSlideNavigationProps
> = ({ slide }: CarouselSlideNavigationProps) => {
  const isCurrentSlide = (slideNumber: number) =>
    slideNumber === slide ? styles.currentSlideDot : styles.outdatedSlideDot;

  return (
    <View style={styles.carouselSlideNavigation}>
      <View
        testID="slide-1-navigation-dot"
        style={[isCurrentSlide(1), styles.dot]}
      />
      <View
        testID="slide-2-navigation-dot"
        style={[isCurrentSlide(2), styles.dot]}
      />
      <View
        testID="slide-3-navigation-dot"
        style={[isCurrentSlide(3), styles.dot]}
      />
    </View>
  );
};
