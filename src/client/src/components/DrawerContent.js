// DrawerContent.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";


import {
  Title,
  Caption,
  Drawer
} from "react-native-paper";

import { useUser } from '../contexts/userContext';


export function DrawerContent(props) {
  const { name, email,logout } = useUser();

  
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
             {/* User info */}
          <View style={[styles.userInfoSection, { flexDirection: "row" }]}>
            <View style={{ marginLeft: 15, flexDirection: "column" }}>
              <Title style={styles.title}>{name}</Title>
              <Caption style={styles.caption}>{email}</Caption>
            </View>
          </View>
          {/* Drawer Content */}
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              onPress={() => {
                props.navigation.navigate("Gestão Patrimonial");
              }}
            />
               <DrawerItem
              label="Perfil"
              onPress={() => {
                props.navigation.navigate("Perfil");
              }}
            />
            <DrawerItem
              label="Bens"
              onPress={() => {
                props.navigation.navigate("Bens");
              }}
            />
             <DrawerItem
              label="Novo Bem"
              onPress={() => {
                props.navigation.navigate("Novo Bem");
              }}
            />
            <DrawerItem
              label="Setor"
              onPress={() => {
                props.navigation.navigate("Setor");
              }}
            />
            <DrawerItem
              label="DashBoard"
              onPress={() => {
                props.navigation.navigate("Dashboard");
              }}
            />
            
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      {/* Sign Out */}
     <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem onPress={logout} label="Sair"  /> 
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
    userInfoSection: {
        paddingLeft: 20,
    },
  drawerSection: {
    flex: 1,
    marginTop: 15,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  }
});
