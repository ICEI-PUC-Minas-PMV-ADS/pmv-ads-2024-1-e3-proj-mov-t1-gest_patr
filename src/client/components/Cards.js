// GoodsCard.js
import * as React from 'react';
import { StyleSheet} from "react-native";
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const GoodsCard = ({ name, price, sector, date_purchase, brand, purchase_site, warranty }) => (
    <Card  style={styles.card}>
        <Card.Title title={name} subtitle={`Price: $${price}`} left={LeftContent} />
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.cover}/>
        <Card.Content>
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
            >Editar</Button>
            <Button
                theme={{colors: {primary:"#6d85db"}}}
                icon="cancel" 
                mode="contained" 
            >Apagar</Button>
        </Card.Actions>
    </Card>
);

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
