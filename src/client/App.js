// app.js
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './src/contexts/userContext';

import AppNav from './src/navigation/AppNav'

function App() {
  
  return (
    <UserProvider>
        <NavigationContainer>
          <AppNav/>
        </NavigationContainer>
    </UserProvider>
  );
  
}

export default App;