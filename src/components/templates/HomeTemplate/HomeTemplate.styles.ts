import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  homeTemplate: {
    width: '100%',
    flex: 1,
    backgroundColor: '#000000',
  },
  contentWrapper: {
    width: '100%',
    paddingTop: 30,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  ballPicture: {
    width: '35%',
    height: '35%',
    position: 'absolute',
    top: '10%',
    left: '70%',
    zIndex: -1,
  },
  homeBar: {
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
    marginRight: 12,
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
  navBar: {
    flexDirection: 'row',
    height: 30,
  },
  navBarItem: {
    width: '33%',
    alignItems: 'center',
  },
});
