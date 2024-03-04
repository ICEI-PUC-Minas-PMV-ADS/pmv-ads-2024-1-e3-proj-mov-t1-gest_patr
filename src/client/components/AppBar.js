import * as React  from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const AppBar = ({ openMenu }) => {
  return (
    <Appbar.Header style={styles.header} >
      <Appbar.Content title="Gestão de Patrimônio" />
      <Appbar.Action icon="dots-vertical" onPress={openMenu} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#98a9e8",
  },
});

export default AppBar;
