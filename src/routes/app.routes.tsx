//npm install @react-navigation/native (Core)
//expo install react-native-screens react-native-safe-area-context (Expo Dependencies)
//npm install @react-navigation/native-stack
//npm install @react-navigation/stack
//npm install react-native-gesture-handler
//npm install @react-native-async-storage/async-storage

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CreateBankAccount } from '../screens/createBankAccount';
import { CreateUser } from '../screens/createUser';
import { FirstAccess } from '../screens/firstAccess';
import { FirstAccessBankAccount } from '../screens/firstAccessBankAcount';
import { Home } from '../screens/homeScreen';
import { Login } from '../screens/login';
import { MyPixKeys } from '../screens/myPixKeys';
import { PixCreateEmailKey } from '../screens/pixCreateEmailKey';
import { PixSelectOperation } from '../screens/pixSelectOperation';
import { PixTransfer } from '../screens/pixTransfer';
import { PixTransferConfirmation } from '../screens/pixTransferConfirmation';
import { SelectBankAccount } from '../screens/selectBankAccount';
import { MyReceipts } from '../screens/myReceipts'

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
                    headerShown: false
                }}
                name="FirstAccess"
                component={FirstAccess}
            />

            <Screen
                options={{
                    headerShown: false
                }}
                name="MyReceipts"
                component={MyReceipts}
            />

            <Screen
                options={{
                    headerShown: false
                }}
                name="Home"
                component={Home}
            />

            <Screen
                options={{
                    headerShown: false
                }}
                name="Login"
                component={Login}
            />
            <Screen
                options={{
                    headerShown: false,
                }}
                name="PixTransferConfirmation"
                component={PixTransferConfirmation}
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
                name="PixTransfer"
                component={PixTransfer}
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
                name="CreateUser"
                component={CreateUser}
            />

            <Screen
                options={{
                    headerShown: false,
                }}
                name="MyPixKeys"
                component={MyPixKeys}
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
                name="PixCreateEmailKey"
                component={PixCreateEmailKey}
            />

            <Screen
                options={{
                    headerShown: false,
                }}
                name="FirstAccessBankAccount"
                component={FirstAccessBankAccount}
            />


        </Navigator >


    )
}