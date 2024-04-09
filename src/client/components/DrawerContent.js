// DrawerContent.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import {
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
            {/* user info */}
        <View style={[styles.userInfoSection, { flexDirection: "row" }]}>
            <View style={{ marginLeft: 15, flexDirection: "column" }}>
              <Title style={styles.title}>User Name</Title>
              <Caption style={styles.caption}>@username</Caption>
            </View>
          </View>
          <View style={[styles.row, styles.userInfoSection]}>
            <View style={[styles.section, { marginLeft: 15 }]}>
              <Caption style={styles.caption}>Setor</Caption>
            </View>
            <View style={[styles.section, { marginLeft: 15 }]}>
              <Caption style={styles.caption}>Cargo</Caption>
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
            <DrawerItem
              label="Confirgurações"
              onPress={() => {
                props.navigation.navigate("Configurações");
              }}
            />
          </Drawer.Section>
          {/* Preferences */}
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <Switch />
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      {/* Sign Out */}
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Sign Out"
          onPress={() => {}}
        />
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
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});