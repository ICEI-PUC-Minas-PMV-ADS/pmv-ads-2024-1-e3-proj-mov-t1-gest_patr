// GoodsCard.js
import * as React from 'react';
import { StyleSheet} from "react-native";
import { Avatar, Button, Card, Text, Dialog, Portal } from 'react-native-paper';
import { deleteGoods, updateGoods } from '../services/goodServices';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const GoodsCard = ({ id, qrcode, name, price, sector, date_purchase, brand, purchase_site, warranty, fetchGoods, date_register }) => {
    const [visible, setVisible] = React.useState(false);

    
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
  
    const handleDelete = async () => {
        try {
          await deleteGoods(id);
          showDialog();
        } catch (error) {
          console.error('Erro ao excluir um bem:', error);
        }
      };
      
    const acaoEditar = async () => {
        try {
          await editGoods(id);
          showDialog();
        } catch (error) {
          console.error('Erro ao editar um bem:', error);
        }
      };
      
      const confirmDelete = async () => {
        try {
          await deleteGoods(id);
          hideDialog();
          fetchGoods();
        } catch (error) {
          console.error('Erro ao excluir um setor:', error);
          hideDialog();
        }
      };

    return (
      
    <Card style={styles.card}>
        <Card.Title title={name} subtitle={`Valor: R$${price}`} left={LeftContent} />
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.cover}/>
        <Card.Content>
            <Text variant="bodyMedium">QR Code: {qrcode}</Text>
            <Text variant="bodyMedium">Data cadastro: {date_register}</Text>
            <Text variant="bodyMedium">Setor: {sector}</Text>
            <Text variant="bodyMedium">Data da compra: {date_purchase}</Text>
            <Text variant="bodyMedium">Marca: {brand}</Text>
            <Text variant="bodyMedium">Local da compra: {purchase_site}</Text>
            <Text variant="bodyMedium">Garantia: {warranty}</Text>
        </Card.Content>
        
        
        <Card.Actions>
            
            
            <Button
                theme={{colors: {primary:"#6d85db"}}}
                icon="pen"
                mode="contained"
                title="Editar"
                onPress={acaoEditar}
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
    }
})
export default GoodsCard;
