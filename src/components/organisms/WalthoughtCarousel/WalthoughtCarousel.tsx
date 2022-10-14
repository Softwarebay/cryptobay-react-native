import React from 'react';
import { View, ViewStyle } from 'react-native';

import { CONE, PAPER_PLANE, SHIELD } from '../../../../assets/pictures';
import { Header, Picture } from '../../atoms';
import { Button } from '../../molecules';

import { styles } from './WalthoughtCarousel.styles';

type WalthoughtCarouselProps = {
  style?: ViewStyle | ViewStyle[];
  onCarouselSlidesEnd: () => void;
};

export const WalthoughtCarousel: React.FC<WalthoughtCarouselProps> = ({
  style,
  onCarouselSlidesEnd,
}: WalthoughtCarouselProps) => {
  const [slide, setSlide] = React.useState<number>(1);

  const isNextSlide = slide < 3;
  const buttonLabel = isNextSlide ? 'Next' : 'Get Start';

  const walthoughtCarouselPictures = [CONE, SHIELD, PAPER_PLANE];
  const walthoughtCarouselHeaders = [
    'Property Diversity',
    'Safe and Convenient',
    'Convenient Transaction',
  ];

  const currentPicture = walthoughtCarouselPictures[slide - 1];
  const currentHeader = walthoughtCarouselHeaders[slide - 1];

  const getSelectedSlideStyle = (slideValue: number) =>
    slideValue === slide ? styles.currentSlideDot : styles.outdatedSlideDot;

  const handleNextSlide = (): void => {
    if (isNextSlide) {
      setSlide(slide + 1);
      return;
    }

    onCarouselSlidesEnd();
  };

  return (
    <View style={[styles.walthoughtCarousel, style]}>
      <Picture
        style={styles.picture}
        pictureFile={currentPicture}
        testID="walthought-carousel-picture"
      />
      <Header
        style={styles.header}
        value={currentHeader}
        testID="walthought-carousel-header"
      />
      <View style={styles.dotWrapper}>
        <View
          style={[styles.dot, getSelectedSlideStyle(1)]}
          testID="walthought-carousel-slide-1-dot"
        />
        <View
          style={[styles.dot, getSelectedSlideStyle(2)]}
          testID="walthought-carousel-slide-2-dot"
        />
        <View
          style={[styles.dot, getSelectedSlideStyle(3)]}
          testID="walthought-carousel-slide-3-dot"
        />
      </View>
      <Button
        label={buttonLabel}
        onPress={handleNextSlide}
        testID="walthought-carousel-button"
      />
    </View>
  );
};
