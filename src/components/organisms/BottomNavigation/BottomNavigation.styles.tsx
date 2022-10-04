import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bottomNavigation: {
    flexDirection: 'row',
    height: 70,
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
