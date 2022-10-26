import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bottomNavigation: {
    backgroundColor: '#17171A',
    flexDirection: 'row',
    height: 100,
  },
  bottomNavigationItem: {
    width: '33%',
    alignItems: 'center',
    padding: 10,
  },
  bottomNavigationItemCurrent: {
    color: '#FEBF32',
  },
  bottomNavigationItemPrevious: {
    color: '#ABAFC4',
  },
});
