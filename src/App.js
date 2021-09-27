import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barSyle="dark-content"
        backgroundColor={theme.background}
      />

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
});
