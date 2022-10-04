import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { Header } from '../../components/atoms';
import { Button } from '../../components/molecules';
import { BottomNavigation } from '../../components/organisms';
import { Screens } from '../screens.enum';
import { StackList } from '../stackList.type';

type SettingsScreenProps = NativeStackScreenProps<StackList, Screens.SETTINGS>;

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
  navigation,
}: SettingsScreenProps) => {
  const route = useRoute();

  const onHomeNavigate = () => navigation.navigate(Screens.HOME);

  const onSwapNavigate = () => navigation.navigate(Screens.SWAP);

  const onSettingsNavigate = () => navigation.navigate(Screens.SETTINGS);

  const onBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Header value="Settings in progress" />
        <Button label="Back" variant="ghost" onPress={onBack} />
      </View>
      <BottomNavigation
        onHomeNavigate={onHomeNavigate}
        onSwapNavigate={onSwapNavigate}
        onSettingsNavigate={onSettingsNavigate}
        routeName={route.name}
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
