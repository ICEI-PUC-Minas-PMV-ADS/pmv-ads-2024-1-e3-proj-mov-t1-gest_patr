// app.js
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AppNav from "./navigation/appNav";


function App() {
  


  return (
    <NavigationContainer>
      <AppNav/>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});

export default App;
