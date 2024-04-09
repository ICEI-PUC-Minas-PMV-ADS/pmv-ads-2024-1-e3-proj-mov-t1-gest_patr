//loginPage.js
import React, { useState } from 'react';
import { StyleSheet, View, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import logo from '../assets/logo.png'


import { useNavigation } from '@react-navigation/native';


import {useUser} from '../contexts/userContext';
import {login} from '../services/authServices';

const Login = () => {

  const navigation = useNavigation();
  
  const {setSigned, setName} = useUser();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

   const handleLogin= () => {

    login({
      email: email,
      password: password
    }).then( res => {
      console.log(res);

      if(res && res.user){
        setSigned(true);
        setName(res.user.name);
        AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
      }else{
         Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }

    });    
  }

  return (
    <Container style={styles.container}>
      <View style={styles.header}>
      <Image source={logo} style={styles.logo} className="App-logo" alt="logo" />
      </View>

      <Headline style={styles.textHeader}>Gestão de Patrimônio</Headline>

      <Body>
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
  );
};

const styles = StyleSheet.create({
  container:{
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

export default Login;