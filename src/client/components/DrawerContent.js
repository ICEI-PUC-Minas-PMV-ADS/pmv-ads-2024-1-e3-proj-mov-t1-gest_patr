import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from "react-native-paper";

export function DrawerContent(props) {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={StyleSheet.DrawerContent}>
                    <View style={[styles.userInfoSection, {flexDirection: 'row'}]}></View>
                    <View style={{marginLeft: 15, flexDirection: 'column'}}>
                        <Title style={styles.title}>User Name</Title>
                        <Caption style={styles.caption}>@username</Caption>
                    </View>
                </View>
                <View style={[styles.row, styles.userInfoSection]}>
                    <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>Setor</Paragraph>
                        <Caption style={styles.caption}>Setor</Caption>
                    </View>
                    </View>
                </DrawerContentScrollView>
</View>
    )
}

const styles = StyleSheet.create({
})