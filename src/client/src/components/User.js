// user.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Input from './Input'; 
import Button from './Button';
import { updateUsers } from '../services/usersServices'; 
import { useUser } from '../contexts/userContext'; 

const User = ({ id, name, email, password, onSave }) => {
  const { id: userId } = useUser(); 
  const [editableName, setEditableName] = useState(false);
  const [editableEmail, setEditableEmail] = useState(false);
  const [editablePassword, setEditablePassword] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState(password);

  const handleNamePress = () => {
    setEditableName(true);
  };

  const handleEmailPress = () => {
    setEditableEmail(true);
  };

  const handlePasswordPress = () => {
    setEditablePassword(true);
  };

  const handleNameChange = (value) => {
    setNewName(value);
  };

  const handleEmailChange = (value) => {
    setNewEmail(value);
  };

  const handlePasswordChange = (value) => {
    setNewPassword(value);
  };

  const saveChanges = async () => {
    try {
      if (newName !== name || newEmail !== email || newPassword !== password) {
        console.log('User data:', { id, name, email, password });

        await updateUsers({ id, name: newName, email: newEmail, password: newPassword });
        setEditableName(false);
        setEditableEmail(false);
        setEditablePassword(false);
        onSave(); // Call the onSave function to refetch the user data
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNamePress}>
        {editableName ? (
          <Input
            style={styles.input}
            value={newName}
            onChangeText={handleNameChange}
          />
        ) : (
          <>
            <Text style={styles.label}>Usuário:</Text>
            <Text style={styles.value}>{name}</Text>
          </>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleEmailPress}>
        {editableEmail ? (
          <Input
            style={styles.input}
            value={newEmail}
            onChangeText={handleEmailChange}
          />
        ) : (
          <>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{email}</Text>
          </>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePasswordPress}>
        {editablePassword ? (
          <Input
            style={styles.input}
            value={newPassword}
            onChangeText={handlePasswordChange}
          />
        ) : (
          <>
            <Text style={styles.label}>Senha:</Text>
            <Text style={styles.value}>{password}</Text>
          </>
        )}
      </TouchableOpacity>
      <Button onPress={saveChanges}>Salvar</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF',
    marginBottom: 8,
  },
});

export default User;
