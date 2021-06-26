import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/home';
import { Signin } from '../screens/signin';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate'

import { useNavigation } from '@react-navigation/native';
import { theme } from '../global/styles/theme';


const { Navigator, Screen } = createStackNavigator();



export function AuthRoutes() {



    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}
        >
          
            
            <Screen
                name="Home"
                component={Home}
            />

            <Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
            />

            <Screen
                name="AppointmentCreate"
                component={AppointmentCreate}
            />


        </Navigator>
    )
}