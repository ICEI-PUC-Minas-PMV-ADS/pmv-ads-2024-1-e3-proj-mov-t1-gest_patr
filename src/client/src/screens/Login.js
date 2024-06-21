// loginPage.js
import React, { useState } from 'react';
import { StyleSheet, View, Alert, Image, SafeAreaView } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import logo from '../assets/logo.png';

import { useNavigation } from '@react-navigation/native';
import { getUsers } from '../services/usersServices'; 
import { useUser } from '../contexts/userContext';

const Login = () => {
  const navigation = useNavigation();
  const { setSigned, setName, setEmail: setUserEmail, setId, setPassword: setUserPassword } = useUser(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const users = await getUsers();
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        console.log('User logged in:', user);
        setSigned(true); 
        setName(user.name); 
        setUserEmail(user.email); 
        setId(user.id);
        setUserPassword(user.password); // Set user password
        navigation.navigate('AppNav');
      } else {
        Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Erro', 'Falha ao fazer login. Por favor, tente novamente mais tarde.');
    }
  }


  return (
    <SafeAreaView style={styles.container}>
    <Container >
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} className="App-logo" alt="logo" />
      </View>

      <Headline style={styles.textHeader}>Gestão de Patrimônio</Headline>

      <Body>
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType={email }
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
          onPress={handleLogin}>
          LOGIN
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => navigation.navigate('Register')}
        >
          Registrar
        </Button>
      </Body>
    </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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

export default Login;
