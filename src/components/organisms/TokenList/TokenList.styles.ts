import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  nav: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navItem: {
    marginHorizontal: 10,
    paddingHorizontal: 15,
  },
  previousTab: {
    color: '#888DAA',
  },
  currentTab: {
    borderBottomWidth: 2,
    borderColor: '#FFFFFF',
  },
  list: {
    height: 250,
  },
});
