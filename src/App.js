import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ScreenA = ({ navigation }) => {

  const onPressHandler = () => {
    navigation.navigate('Screen_B');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        ScreenA
      </Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
      >
        <Text style={styles.text}>
          Go to Screen B
        </Text>
      </Pressable>
    </View>
  );
};

const ScreenB = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        ScreenB
      </Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen_A" component={ScreenA} />
        <Stack.Screen name="Screen_B" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>

    // <ThemeProvider theme={theme}>
    //     <Text>fuck you RN</Text>
    //     <StatusBar backgroundColor={theme.background} />
    // </ThemeProvider>
  );
}

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
