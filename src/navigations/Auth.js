import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Signin, Signup } from '../screens';

const Stack = createStackNavigator();

const Auth = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    );
};

export default Auth;