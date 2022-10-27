import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  detailsModalTemplate: {
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
  detailsContent: {
    backgroundColor: '#17171A',
    height: '60%',
    padding: 24,
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
