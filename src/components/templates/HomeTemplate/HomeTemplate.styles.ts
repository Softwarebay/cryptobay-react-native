import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  homeTemplate: {
    width: '100%',
    flex: 1,
    backgroundColor: '#17171A',
  },
  contentWrapper: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  ballPicture: {
    width: '30%',
    height: '25%',
    position: 'absolute',
    top: '10%',
    left: '85%',
    zIndex: -1,
  },
  homeBar: {
    marginTop: 5,
    marginBottom: 30,
    flexDirection: 'row',
  },
  homeBarDropDown: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '25%',
  },
  homeBarDropDownLabel: {
    color: '#FFFFFF',
  },
  header: {
    marginBottom: 8,
  },
  labelsWrapper: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  actionButtonsWrapper: {
    marginBottom: 30,
    flexDirection: 'row',
  },
  actionButton: {
    marginRight: 8,
  },
  actionButtonIcon: {
    marginRight: 8,
  },
  sctionButtonIconBuy: {
    marginLeft: 6,
    marginRight: 8,
  },
  actionButtonLabel: {
    marginRight: 8,
  },
  actionButtonIconRotate: {
    transform: [{ rotate: '180deg' }],
  },
  tokenList: {
    marginBottom: 16,
  },
  addButton: {
    marginBottom: 30,
  },
  addButtonIcon: {
    marginLeft: '33%',
  },
});
