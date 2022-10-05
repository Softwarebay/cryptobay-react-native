import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { Header } from '../../components/atoms';
import { Button } from '../../components/molecules';
import { BottomNavigation } from '../../components/organisms';

export const SwapScreen: React.FC = () => {
  const navigation = useNavigation();

  const onBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Header value="Swap in progress" />
        <Button label="Back" variant="ghost" onPress={onBack} />
      </View>
      <BottomNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    width: '100%',
    height: '100%',
    paddingBottom: 30,
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    marginTop: 300,
    alignItems: 'center',
  },
});
