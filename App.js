import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { init } from '@rematch/core';
import { Provider } from 'react-redux';
import { app } from './models/appModel';
import AppNavigator from './navigation/AppNavigator';


// Generation du Redux Store
const store = init({
  models: { app },
});

export default function App() {
  useEffect(() => {
    async function getName() {
        const temp = await AsyncStorage.getItem('name');
        setName(temp);
    }
    getName();
}, []);

const [name, setName] = useState('');

  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

