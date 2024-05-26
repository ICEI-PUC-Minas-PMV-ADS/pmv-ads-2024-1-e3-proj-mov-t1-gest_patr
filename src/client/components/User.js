//user.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from './Input'; 
import Button from './Button';
import { updateUsers } from '../services/usersServices'; 
import { useUser } from '../contexts/userContext'; 

const User = ({ id, name, email, password }) => {
  const { id: userId } = useUser(); 
  const [editableName, setEditableName] = useState(false);
  const [editableEmail, setEditableEmail] = useState(false);
  const [editablePassword, setEditablePassword] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState(password);
  const navigation = useNavigation();



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

        const response = await updateUsers({ id, name: newName, email: newEmail, password: newPassword });
        
        if (response) {
          console.log('User saved:', response);
          Alert.alert('Sucesso', 'Dados editados', [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('Perfil'); 
              },
            },
          ]);
          setEditableName(false);
          setEditableEmail(false);
          setEditablePassword(false);
        } else {
          console.error('Failed to save data');
          Alert.alert('Erro', 'Erro ao salvar bem');
        }
      }
    } catch (error) {
      console.error('Error updating user data:', error);
      Alert.alert('Erro', 'Erro ao salvar bem');
    }
  };


  return (
    <View style={styles.container}>
      <View>      
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
      </View>

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
      <Button onPress={saveChanges} > Salvar </Button>
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
    fontSize: 18
  },
});

export default User;
