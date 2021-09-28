import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import * as components from './components';
import { Signin, Signup } from './screens';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ScreenA = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        ScreenA
      </Text>
      <components.Button
        title="ScreenA"
        onPress={() => navigation.navigate('ScreenB')}
      />
    </View>
  );
};

const ScreenB = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        ScreenB
      </Text>
      <components.Button
        title="ScreenB"
        onPress={() => navigation.navigate('ScreenA')}
      />
    </View>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.background} barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Signin" component={Signin}
          />
          <Stack.Screen
            name="Signup" component={Signup}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});
