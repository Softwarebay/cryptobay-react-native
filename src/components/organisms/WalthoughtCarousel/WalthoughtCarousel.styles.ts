import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  walthoughtCarousel: {
    width: '100%',
  },
  picture: {
    height: 302,
    alignSelf: 'center',
  },
  header: {
    marginTop: 52,
    marginBottom: 72,
    alignSelf: 'flex-start',
  },
  dotWrapper: {
    flexDirection: 'row',
    marginBottom: 16,
    alignSelf: 'center',
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
