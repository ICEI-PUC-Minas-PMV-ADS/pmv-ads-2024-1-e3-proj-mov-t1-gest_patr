// registerPage.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import logo from '../assets/logo.png'

import { useNavigation } from '@react-navigation/native';
import { getUsers, insertUsers } from '../services/usersServices';


const Register = () => {
  const navigation = useNavigation();

  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

 useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleRegister = async () => {
  try {
    const response = await insertUsers({ name, email, password });

    console.log('Response from register:', response);

    if (response && response.id) {
      Alert.alert('Successo', 'Usuário registrado com sucesso!', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } else {
      Alert.alert('Error', 'Falha ao registrar usuário');
    }
  } catch (error) {
    console.error('Error registering user:', error);
    Alert.alert('Error', 'Falha ao registrar usuário. Tente mais tarsde.');
  }
}


  return (
    <Container style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} className="App-logo" alt="logo" />
      </View>

      <Headline style={styles.textHeader}>Gestão de Patrimônio</Headline>

      <Body>
        <Input
          label="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
          left={<TextInput.Icon name="account" />}
        />
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="account" />}
        />
        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon name="key" />}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={handleRegister}>
          Registrar
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => navigation.goBack()}
        >
          Cancelar
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    marginBottom: 8,
  },
  textHeader: {
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12
  },
  logo: {
    marginBottom: 30,
    width: 150,
    height: 150,
  }
});

export default Register;