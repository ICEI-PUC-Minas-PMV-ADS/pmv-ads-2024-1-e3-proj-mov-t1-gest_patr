//profile.js
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useUser } from '../contexts/userContext';
import User from '../components/User';

const ProfilePage = (props) => {
  const { name, email, id, password } = useUser();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
<User id={id} name={name} email={email} password={password} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
});

export default ProfilePage;
