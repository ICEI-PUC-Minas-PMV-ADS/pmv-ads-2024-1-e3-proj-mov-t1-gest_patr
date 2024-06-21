//List.js
import * as React from 'react';
import { List, Button, Dialog, Portal, TextInput } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import { deleteSector, updateSector } from '../services/sectorServices';

const SectorsList = ({ id, name, fetchSectors }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [editedName, setEditedName] = React.useState(name || '');
  const [editedId, setEditedId] = React.useState(id || '');
  const [originalId, setOriginalId] = React.useState(id); 

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleUpdate = async () => {
    try {
      await updateSector(originalId, { name: editedName });
      showDialog();
    } catch (error) {
      console.error('Error updating sector:', error);
    }
  };

  const confirmUpdate = async () => {
    try {
      await updateSector(originalId, { name: editedName });
      hideDialog();
      fetchSectors();
    } catch (error) {
      console.error('Error updating sector:', error);
      hideDialog();
    }
  };

  const handleDelete = async () => {
    try {
      await deleteSector(id);
      showDialog();
    } catch (error) {
      console.error('Error deleting sector:', error);
    }
  };

  const confirmDelete = async () => {
    try {
      await deleteSector(id);
      hideDialog();
      fetchSectors();
    } catch (error) {
      console.error('Error deleting sector:', error);
      hideDialog();
    }
  };

  return (
    <List.Section style={{ backgroundColor: 'white' }}>
      <List.Accordion
        title={name}
        expanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}>
        <TextInput
          label="Name"
          value={editedName}
          onChangeText={setEditedName}
          mode="outlined"
          editable={true}
        />
        <TextInput
          label="ID"
          value={editedId}
          onChangeText={setEditedId}
          mode="outlined"
          editable={true}
        />
        <View style={styles.fixToText}>
          <Button
            theme={{ colors: { primary: '#6d85db' } }}
            icon="cancel"
            mode="contained-tonal"
            onPress={handleDelete}
          />
          <Button
            theme={{ colors: { primary: '#6d85db' } }}
            icon="pencil"
            mode="contained-tonal"
            onPress={handleUpdate}
          />
        </View>
      </List.Accordion>
      {/* Confirmation dialog */}
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Confirmar exclusão</Dialog.Title>
          <Dialog.Content>
            <Text>Tem certeza que deseja apagar este setor?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={confirmDelete}>Sim</Button>
            <Button onPress={hideDialog}>Cancelar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Confirmar edição</Dialog.Title>
          <Dialog.Content>
            <Text>Tem certeza que deseja editar este setor?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={confirmUpdate}>Sim</Button>
            <Button onPress={hideDialog}>Cancelar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </List.Section>
  );
};

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row-reverse',
    marginHorizontal: 2,
    marginVertical: 10,
  },
});

export default SectorsList;