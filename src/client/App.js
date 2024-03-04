import React from "react";
import { Provider as PaperProvider } from "react-native-paper"; 
import { View, TouchableOpacity, Touchable, Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"; 
import HomePage from "./pages/homePage";
import { DrawerContent } from "./components/DrawerContent"; 
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function App() {

  function HomeScreen({navigation}) {
    return (
      <SafeAreaProvider> 
      <PaperProvider> 
        <View style={style.body}>
          <TouchableOpacity
            // onPress={() => navigation.navigate("Details")}
            >
              <HomePage/>
          </TouchableOpacity>
        </View>
        </PaperProvider>
    </SafeAreaProvider>
  )
  };

  function DetailsScreen(navigation) {
    return (
      <SafeAreaProvider>
        <PaperProvider>
          <View style={style.body}>
            <Text>Details Screen</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "blue",
                padding: 20,
                borderRadius: 5,
                marginTop: 20,
              }}
              onPress={() => navigation.navigate("Home")}
              >
                <Text style={{color: "white"}}>Go to Home</Text>  
            </TouchableOpacity>
          </View>
        </PaperProvider>
      </SafeAreaProvider>   
    );
  };
  function GoodsScreen(){
    return(
      <SafeAreaProvider>
        <PaperProvider>
          <View style={style.body}>
            <Text>Goods Screen</Text>
          </View>
        </PaperProvider>
      </SafeAreaProvider>
    )
  };
  function SectorScreen(){
    return(
      <SafeAreaProvider>
        <PaperProvider>
          <View style={style.body}>
            <Text>Sector Screen</Text>
          </View>
        </PaperProvider>
      </SafeAreaProvider>
    )
  };
  function SettingsScreen(){
    return(
      <SafeAreaProvider>
        <PaperProvider>
          <View style={style.body}>
            <Text>Settings Screen</Text>
          </View>
        </PaperProvider>
      </SafeAreaProvider>
    )
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent{...props}/>} initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
        <Drawer.Screen name="Goods" component={GoodsScreen} />
        <Drawer.Screen name="Sector" component={SectorScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
  
}

const style = StyleSheet.create({
})
export default App;
