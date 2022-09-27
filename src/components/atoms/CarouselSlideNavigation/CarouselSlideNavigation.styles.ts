import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  carouselSlideNavigation: {
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  outdatedSlideDot: {
    backgroundColor: '#4C516B',
  },
  currentSlideDot: {
    backgroundColor: '#FEBF32',
  },
});
