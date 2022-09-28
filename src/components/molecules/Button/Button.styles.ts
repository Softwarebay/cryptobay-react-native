import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderRadius: 8,
  },
  dark: {
    backgroundColor: '#2A2D3C',
    color: '#FEBF32',
  },
  bright: {
    backgroundColor: '#FEBF32',
    color: '#000000',
  },
  noIcon: {
    padding: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  withIcon: {
    width: 'auto',
    padding: 8,
    alignItems: 'center',
  },
});
