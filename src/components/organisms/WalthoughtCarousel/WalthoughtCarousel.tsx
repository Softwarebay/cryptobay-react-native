import React from 'react';
import { View, ViewStyle } from 'react-native';

import { CONE, PAPER_PLANE, SHIELD } from '../../../../assets/pictures';
import { Header, Picture } from '../../atoms';
import { Button } from '../../molecules';

import { styles } from './WalthoughtCarousel.styles';

type WalthoughtCarouselProps = {
  onNavigate: () => void;
  style?: ViewStyle | ViewStyle[];
};

export const WalthoughtCarousel: React.FC<WalthoughtCarouselProps> = ({
  onNavigate,
  style,
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

  const getSelectedSlideStyle = (observableSlide: number) =>
    observableSlide === slide
      ? styles.currentSlideDot
      : styles.outdatedSlideDot;

  const handleNextSlide = (): void => {
    if (isNextSlide) {
      setSlide(slide + 1);
      return;
    }

    onNavigate();
  };

  return (
    <View style={[styles.walthoughtCarousel, style]}>
      <Picture pictureFile={currentPicture} style={styles.picture} />
      <Header value={currentHeader} style={styles.header} />
      <View style={styles.dotWrapper}>
        <View style={[styles.dot, getSelectedSlideStyle(1)]} />
        <View style={[styles.dot, getSelectedSlideStyle(2)]} />
        <View style={[styles.dot, getSelectedSlideStyle(3)]} />
      </View>
      <Button label={buttonLabel} onPress={handleNextSlide} />
    </View>
  );
};
