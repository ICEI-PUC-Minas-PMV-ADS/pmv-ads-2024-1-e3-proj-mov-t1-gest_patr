import * as React from 'react';
import { List, Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const SectorsList = ({ id, name }) => {
  const [expanded, setExpanded] = React.useState(true);


  return (
    
    <List.Section style={{ backgroundColor: 'white' }}>    
          <List.Accordion
            title={name}
            expanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}>
          <List.Item title={`ID: ${id}`} />
          <View style={styles.fixToText}>
            <Button 
              theme={{colors: {primary:"#6d85db"}}}
              icon="pen" 
              mode="contained-tonal" 
              onPress={() => {}}/>
              

            <Button
              theme={{colors: {primary:"#6d85db"}}}
              icon="cancel"
              mode="contained-tonal"
              onPress={() => {}}/>

          </View>
          </List.Accordion>
          </List.Section>

  );
};
const styles = StyleSheet.create({

  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 2,
    marginVertical: 10,
  }
})
export default SectorsList;
