import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

type StorybookViewProps = {
  children: React.ReactNode;
};

const StorybookView: React.FC<StorybookViewProps> = ({
  children,
}: StorybookViewProps) => {
  return (
    <SafeAreaView style={styles.storybookContainer}>{children}</SafeAreaView>
  );
};

export default StorybookView;

const styles = StyleSheet.create({
  storybookContainer: {
    backgroundColor: '#323546',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
