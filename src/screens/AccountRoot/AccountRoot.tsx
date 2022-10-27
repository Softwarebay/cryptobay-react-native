import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Screens } from '../../screens.enum';
import { StackList } from '../../types/stackList.type';
import { AccountScreen } from '../AccountScreen/AccountScreen';
import { CreateNewAccountScreen } from '../CreateNewAccountScreen/CreateNewAccountScreen';
import { ImportAccountScreen } from '../ImportAccountScreen/ImportAccountScreen';

const Account = createNativeStackNavigator<StackList>();

export const AccountRoot: React.FC = () => {
  return (
    <Account.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Account.Screen
        name={Screens.ACCOUNT}
        options={{ presentation: 'transparentModal' }}
        component={AccountScreen}
      />
      <Account.Screen
        name={Screens.CREATE_NEW_ACCOUNT}
        options={{ presentation: 'transparentModal' }}
        component={CreateNewAccountScreen}
      />
      <Account.Screen
        name={Screens.IMPORT_ACCOUNT}
        options={{ presentation: 'transparentModal' }}
        component={ImportAccountScreen}
      />
    </Account.Navigator>
  );
};
