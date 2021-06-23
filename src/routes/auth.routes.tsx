import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/home';
import { Signin } from '../screens/signin';
import { useNavigation } from '@react-navigation/native';


const { Navigator, Screen } = createStackNavigator();



export function AuthRoutes() {



    return (
        <Navigator
            headerMode="none"
            screenOptions={{cardStyle: {
                backgroundColor: 'transparent'
            }}}
        >
            <Screen
                name="Signin"
                component={Signin}
            />

            <Screen
                name="Home"
                component={Home}
            />


        </Navigator>
    )
}