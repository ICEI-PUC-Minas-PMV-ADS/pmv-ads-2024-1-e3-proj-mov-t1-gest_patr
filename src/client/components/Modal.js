//Modal.js
import React from "react";
import { Modal, View, StyleSheet, Button } from "react-native";
import {Searchbar} from 'react-native-paper';

const SearchModal = ({ visible, toggleModal }) => {
    const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={toggleModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <Searchbar/>
          <Button title="Fechar" onPress={toggleModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
  },
  modalContent: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 5,
    elevation: 5,
  },
});

export default SearchModal;