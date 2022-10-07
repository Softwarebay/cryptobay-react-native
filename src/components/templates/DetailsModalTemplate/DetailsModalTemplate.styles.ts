import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  detailsModalScreen: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',

    /* borderWidth: 1,
    borderColor: 'red', */
  },
  blur: {
    height: '40%',
    padding: 8,
    justifyContent: 'flex-end',
    alignItems: 'center',

    /* borderWidth: 1,
    borderColor: 'red', */
  },
  indicator: {
    width: 40,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#ABAFC4',
  },
  detailsContent: {
    backgroundColor: '#000000',
    height: '60%',
    padding: 16,

    /* borderWidth: 1,
    borderColor: 'red', */
  },
  operationLabel: {
    marginBottom: 20,
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  contentSection: {
    marginBottom: 32,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summarySection: {
    borderWidth: 1,
    borderColor: '#2F2F2F',
    borderRadius: 10,
  },
  summarySectionRow: {
    padding: 16,
  },
  summaryCanceledDatat: {
    borderBottomWidth: 1,
    borderBottomColor: '#2F2F2F',
  },
  summaryDataFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryTotalAmountDolars: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
});
