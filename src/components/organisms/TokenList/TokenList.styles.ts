import { StyleSheet } from 'react-native';

export const tockenListItemStyles = StyleSheet.create({
  container: {
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  picture: {
    marginRight: 8,
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#44485F',
  },
  valueData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  caption: {
    marginRight: 8,
  },
});

export const tockenListStyles = StyleSheet.create({
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
    minHeight: 350,
  },
});
