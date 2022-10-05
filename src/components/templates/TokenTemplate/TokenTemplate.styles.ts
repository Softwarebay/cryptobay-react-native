import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tokenTemplate: {
    width: '100%',
    flex: 1,
    backgroundColor: '#000000',
  },
  contentWrapper: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  ballPicture: {
    width: '30%',
    height: '30%',
    position: 'absolute',
    top: '10%',
    left: '75%',
    zIndex: -1,
  },
  navBar: {
    marginTop: 20,
    marginBottom: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: '5%',
    left: 0,
  },
  backButtonIcon: {
    transform: [{ rotate: '90deg' }],
  },
  priceLabel: {
    marginBottom: 20,
    color: '#FFFFFF',
  },
  actionButtonsWrapper: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  actionButton: {
    marginRight: 8,
  },
});