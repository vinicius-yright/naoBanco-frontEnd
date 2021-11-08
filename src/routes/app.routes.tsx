//npm install @react-navigation/native (Core)
//expo install react-native-screens react-native-safe-area-context (Expo Dependencies)
//npm install @react-navigation/native-stack
//npm install @react-navigation/stack
//npm install react-native-gesture-handler
//npm install @react-native-async-storage/async-storage

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { FirstAccess } from '../screens/firstAccess';
import { CreateUser } from '../screens/createUser';
import { TesteModal } from '../screens/testeModal';
import { Login } from '../screens/login';
import { FirstAccessBankAccount } from '../screens/firstAccessBankAcount';
import { CreateBankAccount } from '../screens/createBankAccount'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PixTransfer } from '../screens/pixTransfer';
import { PixSelectOperation } from '../screens/pixSelectOperation';
import { Home } from '../screens/homeScreen';
import { SelectBankAccount } from '../screens/selectBankAccount';

//import { theme } from '../global/styles/theme';
//CreateBankAccount

const { Navigator, Screen } = createStackNavigator();
var firstScreen = ''

async function checkFirstAccess() {

    if (await (AsyncStorage.getItem('firstAccessOk')) == "true") {
        firstScreen = 'Login'
    } else {
        firstScreen = 'FirstAccess'
    }


}
export function AppRoutes() {
    checkFirstAccess()
    return (

        <Navigator>

            <Screen
                options={{
                    headerShown: false,
                }}
                name="PixTransfer"
                component={PixTransfer}
            />

            <Screen
                options={{
                    headerShown: false,
                }}
                name="PixSelectOperation"
                component={PixSelectOperation}
            />

            
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
                name="Home"
                component={Home}
            />

            <Screen
                options={{
                    headerShown: false,
                }}
                name="SelectBankAccount"
                component={SelectBankAccount}
            />

            <Screen
                options={{
                    headerShown: false,
                }}
                name="Login"
                component={Login}
            />
            <Screen
                options={{
                    headerShown: false,
                }}
                name="CreateBankAccount"
                component={CreateBankAccount}
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

        </Navigator >


    )
}