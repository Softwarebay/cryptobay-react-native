import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import { Header } from '../../components/atoms';
import { Button } from '../../components/molecules';
import { Screens } from '../../screens.enum';
import { StackList } from '../../types/stackList.type';

type SwapScreenProps = NativeStackScreenProps<StackList, Screens.SWAP>;

export const SwapScreen: React.FC<SwapScreenProps> = ({
  navigation,
}: SwapScreenProps) => {
  const onPressBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Header style={styles.header} value="Swap in progress" />
        <Button
          testID="swap-screen-back-button"
          label="Back"
          variant="ghost"
          onPress={onPressBack}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    width: '100%',
    height: '100%',
    paddingBottom: 30,
    flex: 1,
    backgroundColor: '#17171A',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    marginTop: 300,
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
  },
});
