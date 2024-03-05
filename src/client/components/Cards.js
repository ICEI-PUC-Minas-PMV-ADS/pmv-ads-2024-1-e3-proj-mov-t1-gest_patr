// GoodsCard.js
import * as React from 'react';
import { StyleSheet} from "react-native";
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const GoodsCard = ({ name, price }) => (
    <Card  style={styles.card}>
        <Card.Title title={name} subtitle={`Price: $${price}`} left={LeftContent} />
        <Card.Content>
            <Text variant="titleLarge">{name}</Text>
            <Text variant="bodyMedium"> {price}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
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
    }
})
export default GoodsCard;
