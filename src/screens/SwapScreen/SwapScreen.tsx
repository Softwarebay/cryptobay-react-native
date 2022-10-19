import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import { Header } from '../../components/atoms';
import { Button } from '../../components/molecules';
import { BottomNavigation } from '../../components/organisms';
import { Screens } from '../../screens.enum';
import { StackList } from '../../types/stackList.type';

type SwapScreenProps = NativeStackScreenProps<StackList, Screens.SWAP>;

export const SwapScreen: React.FC<SwapScreenProps> = ({
  route,
  navigation,
}: SwapScreenProps) => {
  const onBack = () => navigation.goBack();

  const onHomeNavigate = () => navigation.navigate(Screens.HOME);

  const onSwapNavigate = () => navigation.navigate(Screens.SWAP);

  const onSettingsNavigate = () => navigation.navigate(Screens.SETTINGS);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Header value="Swap in progress" />
        <Button
          testID="swap-screen-back-button"
          label="Back"
          variant="ghost"
          onPress={onBack}
        />
      </View>
      <BottomNavigation
        routeName={route.name}
        onHomeNavigate={onHomeNavigate}
        onSwapNavigate={onSwapNavigate}
        onSettingsNavigate={onSettingsNavigate}
      />
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
