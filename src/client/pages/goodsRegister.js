import React, {useEffect, useState} from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { List, Text, FAB } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import {useNavigation} from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';
import {getGoods} from '../services/goodsServices';

import { useIsFocused } from '@react-navigation/native';

const Goods = () => {

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const {name} = useUser();
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    getGoods().then(dados => {
      console.log(dados);
      setGoods(dados);
    });
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <List.Item
      title={
        'R$' + item.valor+ ' (R$' + item.preco + ')'
      }
      description={item.odometro + ' km'}
      left={(props) => (
        <List.Icon
          {...props}
          color={item.tipo == 0 ? 'red' : 'green'}
          icon="gas-station"
        />
      )}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {' '}
          {item.data}{' '}
        </Text>
      )}
      onPress={() => navigation.navigate('Abastecimento', {item})}
    />
  );

  return (
    <Container>
      <Header title={'Olá, ' + name} />
      <Body>
        <FlatList
          data={Goods}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => navigation.navigate('Abastecimento')}
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Goods;
