// GoodsCard.js
import * as React from 'react';
import { StyleSheet} from "react-native";
import { Avatar, Button, Card, Text, Dialog, Portal } from 'react-native-paper';
import { deleteGood } from '../services/goodsServices';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const GoodsCard = ({ id, qrcode, name, price, sector, date_purchase, brand, purchase_site, warranty, fetchGoods }) => {
    const [visible, setVisible] = React.useState(false);

    
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
  
    const handleDelete = async () => {
        try {
          await deleteGood(id);
          showDialog();
        } catch (error) {
          console.error('Error deleting sector:', error);
        }
      };
    
      const confirmDelete = async () => {
        try {
          await deleteGood(id);
          hideDialog();
          fetchGoods();
        } catch (error) {
          console.error('Error deleting sector:', error);
          hideDialog();
        }
      };

    return (
      
    <Card  style={styles.card}>
        <Card.Title title={name} subtitle={`Price: $${price}`} left={LeftContent} />
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.cover}/>
        <Card.Content>
            <Text variant="bodyMedium"> {qrcode}</Text>
            <Text variant="bodyMedium"> {sector}</Text>
            <Text variant="bodyMedium"> {date_purchase}</Text>
            <Text variant="bodyMedium"> {brand}</Text>
            <Text variant="bodyMedium"> {purchase_site}</Text>
            <Text variant="bodyMedium"> {warranty}</Text>
        </Card.Content>
        <Card.Actions>
            <Button
                theme={{colors: {primary:"#6d85db"}}}
                icon="pen"
                mode="contained"
                title="Right button"
            />
            <Button
                theme={{colors: {primary:"#6d85db"}}}
                icon="cancel" 
                mode="contained" 
                onPress={handleDelete}
            />
        </Card.Actions>
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
    </Card>
    
);
};
const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 4,  
    },
    cover: {
        height: 150,
    },
    fixToText: {
        flexDirection: 'row-reverse',
        marginHorizontal: 2,
        marginVertical: 10,
      },
})
export default GoodsCard;