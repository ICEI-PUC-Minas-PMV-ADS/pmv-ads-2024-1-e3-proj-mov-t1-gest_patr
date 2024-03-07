// app.js
import React from "react";
import { Provider as PaperProvider } from "react-native-paper"; 
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"; 
import { DrawerContent } from "./components/DrawerContent"; 
// import Route from "./src/navigation/route";
import HomePage from "./pages/homePage";
import DetailsPage from "./pages/detailsPage";
import GoodsPage from "./pages/goodsPage";
import SectorPage from "./pages/sectorPage";
// import SettingsPage from "./pages/settingsPage";
// import UserProvider from './src/contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

function App() {
  
  // function RouteScreen() {
  //   return(
  //     <UserProvider>
  //     <NavigationContainer>
  //       <Route />
  //     </NavigationContainer>
  //   </UserProvider>
  //   )
  // };

  function HomeScreen() {
    return (
      <SafeAreaProvider> 
        <PaperProvider> 
          <View style={styles.body}>
            <HomePage/>
          </View>
        </PaperProvider>
      </SafeAreaProvider>
    )
  };

  function DetailsScreen() {
    return (
     <SafeAreaProvider> 
        <PaperProvider> 
          <View style={styles.body}>
            <DetailsPage/>
          </View>
        </PaperProvider>
      </SafeAreaProvider>
    )
  };

  function GoodsScreen(){
    return(
      <SafeAreaProvider>
        <PaperProvider>
          <View style={styles.body}>
            <GoodsPage/>
          </View>
        </PaperProvider>
      </SafeAreaProvider>
    )
  };
  
  function SectorScreen(){
    return(
      <SafeAreaProvider>
        <PaperProvider>
          <View style={styles.body}>
            <SectorPage/>
          </View>
        </PaperProvider>
      </SafeAreaProvider>
    )
  };

  function SettingsScreen(){
    return(
      <SafeAreaProvider>
        <PaperProvider>
          <View style={styles.body}>
            <SettingsPage/>
          </View>
        </PaperProvider>
      </SafeAreaProvider>
    )
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props}/>} >
        <Drawer.Screen name="Gestão de Patrimônio" component={HomeScreen} />
        <Drawer.Screen name="Perfil" component={DetailsScreen} />
        <Drawer.Screen name="Bens" component={GoodsScreen} />
        <Drawer.Screen name="Setor" component={SectorScreen} />
        <Drawer.Screen name="Configurações" component={SettingsScreen} />
      </Drawer.Navigator>
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
