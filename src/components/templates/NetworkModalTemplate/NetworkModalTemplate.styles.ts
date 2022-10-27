import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  networkModalTemplate: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  blur: {
    height: '40%',
    padding: 8,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  indicator: {
    width: 40,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#ABAFC4',
  },
  networkContent: {
    backgroundColor: '#17171A',
    height: '60%',
    padding: 24,
  },
  networkModalLabel: {
    marginBottom: 32,
    alignSelf: 'center',
    color: '#FFFFFF',
  },
  selectedNetworkItem: {
    marginBottom: 32,
    paddingLeft: 10,
  },
  networkListWrapper: {
    width: '100%',
  },
  networkListLabel: {
    marginBottom: 24,
    color: '#ABAFC4',
  },
  networkList: {
    marginBottom: 40,
    paddingLeft: 10,
  },
  networkListItem: {
    marginBottom: 18,
  },
  closeButton: {
    marginBottom: 54,
    alignSelf: 'flex-end',
  },
});
