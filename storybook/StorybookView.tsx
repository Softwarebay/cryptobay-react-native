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
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
