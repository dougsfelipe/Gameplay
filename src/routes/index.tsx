import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';
import { Signin } from '../screens/signin';


export function Routes(){
    const { user } = useAuth();
    console.log(user.id)

    return(
        
        <NavigationContainer>
            { user.id ? <AuthRoutes /> :  <Signin/> }
        </NavigationContainer>
        
    )
}