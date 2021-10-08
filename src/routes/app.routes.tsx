//npm install @react-navigation/native (Core)
//expo install react-native-screens react-native-safe-area-context (Expo Dependencies)
//npm install @react-navigation/native-stack
//npm install @react-navigation/stack
//npm install react-native-gesture-handler

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { FirstAccess } from '../screens/firstAccess';
import { CreateUser } from '../screens/createUser';
import { TesteModal } from '../screens/testeModal';
import { Login } from '../screens/login';
import { FirstAccessBankAccount } from '../screens/firstAccessBankAcount';
//import { theme } from '../global/styles/theme';


const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (

            <Navigator
             /* screenOptions={{
                 cardStyle: { 
                    backgroundColor: theme.colors.secondary100,
              }
             }}*/
            >

                <Screen
                    options={{
                        headerShown: false,
                    }}
                    name="FirstAccess"
                    component={FirstAccess}
                />

                <Screen
                    options={{
                        headerShown: false,
                    }}
                    name="CreateUser"
                    component={CreateUser}
                />

                <Screen
                    options={{
                        headerShown: false,
                    }}
                    name="TesteModal"
                    component={TesteModal}
                />

                <Screen
                    options={{
                        headerShown: false,
                    }}
                    name="FirstAccessBankAccount"
                    component={FirstAccessBankAccount}
                />

                <Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Login"
                    component={Login}
                />

            </Navigator>
       

    )
}