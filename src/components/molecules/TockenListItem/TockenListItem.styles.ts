import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tockenListItem: {
    width: '100%',
    marginVertical: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tockenPicture: {
    width: 34,
    height: 34,
    backgroundColor: '#44485F',
    borderRadius: 34,
  },
  tockenDataWrapper: {
    width: '60%',
  },
  tockenCurrencyDataWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tockenDolarValue: {
    marginRight: 8,
  },
  tockenPriceWrapper: {
    height: '100%',
    justifyContent: 'flex-start',
  },
});
