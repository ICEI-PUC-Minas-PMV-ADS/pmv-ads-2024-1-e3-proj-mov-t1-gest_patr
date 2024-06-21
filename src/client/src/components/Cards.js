import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar, Button, Card, Text, Dialog, Portal } from 'react-native-paper';
import { updateGoods, deleteGoods } from '../services/goodServices';
import Input from './Input';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const GoodsCard = ({ id, qrcode, name, price, sector, date_purchase, brand, purchase_site, warranty, fetchGoods, date_register }) => {
    const [visible, setVisible] = useState(false);
    const [editableName, setEditableName] = useState(false);
    const [editablePrice, setEditablePrice] = useState(false);
    const [editableSector, setEditableSector] = useState(false);
    const [editableDate_Purchase, setEditableDate_Purchase] = useState(false);
    const [editableBrand, setEditableBrand] = useState(false);
    const [editablePurchase_Site, setEditablePurchase_Site] = useState(false);
    const [editableWarranty, setEditableWarranty] = useState(false);

    const [newName, setNewName] = useState(name);
    const [newPrice, setNewPrice] = useState(price);
    const [newSector, setNewSector] = useState(sector);
    const [newDate_Purchase, setNewDate_Purchase] = useState(date_purchase);
    const [newBrand, setNewBrand] = useState(brand);
    const [newPurchase_Site, setNewPurchase_Site] = useState(purchase_site);
    const [newWarranty, setNewWarranty] = useState(warranty);

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const handleNamePress = () => {
        setEditableName(true);
    };

    const handlePricePress = () => {
        setEditablePrice(true);
    };
    
    const handleBrandPress = (value) => {
      setEditableBrand(value);
  };

  const handleSectorPress = (value) => {
    setEditableSector(value);
};

const handleDate_PurchasePress = (value) => {
  setEditableDate_Purchase(value);
};

const handleWarrantyPress = (value) => {
  setEditableWarranty(value);
};

const handlePurchase_SitePress = (value) => {
  setEditablePurchase_Site(value);
}

    const handleNameChange = (value) => {
        setNewName(value);
    };

    const handlePriceChange = (value) => {
        setNewPrice(value);
    };

    const handleBrandChange = (value) => {
      setNewBrand(value);
  };

    const handleSectorChange = (value) => {
      setNewSector(value);
    };

    const handleDate_PurchaseChange = (value) => {
      setNewDate_Purchase(value);
    };

    const handleWarrantyChange = (value) => {
      setNewWarranty(value);
    };

    const handlePurchase_SiteChange = (value) => {
      setNewPurchase_Site(value);
    }
    const saveChanges = async () => {
        try {
            if (newName !== name || newPrice !== price || newSector !== sector || newBrand !== brand || newDate_Purchase !== date_purchase || newPurchase_Site !== purchase_site || newWarranty !== warranty ) {
                await updateGoods({ id, name: newName, price: newPrice, sector: newSector, brand: newBrand, date_purchase: newDate_Purchase, warranty: newWarranty, purchase_site: newPurchase_Site });
                setEditableName(false);
                setEditablePrice(false);
                setEditableSector(false);
                setEditableBrand(false);
                setEditableDate_Purchase(false);
                setEditableWarranty(false);
                setEditablePurchase_Site(false);
                fetchGoods();
            }
        } catch (error) {
            console.error('Error updating goods data:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteGoods(id);
            showDialog();
        } catch (error) {
            console.error('Error deleting goods:', error);
        }
    };

    const confirmDelete = async () => {
        try {
            await deleteGoods(id);
            hideDialog();
            fetchGoods();
        } catch (error) {
            console.error('Error deleting goods:', error);
            hideDialog();
        }
    };

    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Card style={styles.card}>
            <Card.Title title={name} subtitle={`Valor: R$${price}`} left={LeftContent} />
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.cover}/>
            <Card.Content>
            <Text variant="bodyMedium">QR Code: {qrcode}</Text>
            {/* Editable fields */}
            <TouchableOpacity onPress={handleNamePress}>
                {editableName ? (
                    <Input
                        style={styles.input}
                        value={newName}
                        onChangeText={handleNameChange}
                    />
                ) : (
                    <Text variant="bodyMedium">Nome: {name}</Text>
                )}
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handlePricePress}>
                {editablePrice ? (
                    <Input
                        style={styles.input}
                        value={newPrice}
                        onChangeText={handlePriceChange}
                    />
                ) : (
                    <Text variant="bodyMedium">Preço: {price}</Text>
                )}
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSectorPress}>
                {editableSector ? (
                    <Input
                        style={styles.input}
                        value={newSector}
                        onChangeText={handleSectorChange}
                    />
                ) : (
                    <Text variant="bodyMedium">Setor: {sector}</Text>
                )}
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBrandPress}>
                {editableBrand ? (
                    <Input
                        style={styles.input}
                        value={newBrand}
                        onChangeText={handleBrandChange}
                    />
                ) : (
                    <Text variant="bodyMedium">Marca: {brand}</Text>
                )}
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDate_PurchasePress}>
                {editableDate_Purchase ? (
                    <Input
                        style={styles.input}
                        value={newDate_Purchase}
                        onChangeText={handleDate_PurchaseChange}
                    />
                ) : (
                    <Text variant="bodyMedium">Data da compra: {date_purchase}</Text>
                )}
            </TouchableOpacity>
            <TouchableOpacity onPress={handleWarrantyPress}>
                {editableWarranty ? (
                    <Input
                        style={styles.input}
                        value={newWarranty}
                        onChangeText={handleWarrantyChange}
                    />
                ) : (
                    <Text variant="bodyMedium">Garantia: {warranty}</Text>
                )}
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePurchase_SitePress}>
                {editablePurchase_Site ? (
                    <Input
                        style={styles.input}
                        value={newPurchase_Site}
                        onChangeText={handlePurchase_SiteChange}
                    />
                ) : (
                    <Text variant="bodyMedium">Local de compra: {purchase_site}</Text>
                )}
            </TouchableOpacity>
            </Card.Content>
            <Card.Actions>
                <Button
                    theme={{ colors: { primary: "#6d85db" } }}
                    icon="check"
                    mode="contained"
                    onPress={saveChanges}
                >
                    Salvar
                </Button>
                <Button
                    theme={{ colors: { primary: "#6d85db" } }}
                    icon="cancel"
                    mode="contained"
                    onPress={handleDelete}
                >
                    Excluir
                </Button>
            </Card.Actions>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Confirmar exclusão</Dialog.Title>
                    <Dialog.Content>
                        <Text>Tem certeza que deseja apagar este item?</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={confirmDelete}>Sim</Button>
                        <Button onPress={hideDialog}>Cancelar</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </Card>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 4,
    },
    scrollView: {
      flexGrow: 1,
  },
    input: {
        backgroundColor: '#FFF',
        marginBottom: 8,
    }
});

export default GoodsCard;
