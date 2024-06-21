//button.js
import { Button } from 'react-native-paper';

const button = (props) => {
  return (
    <Button
    theme={{colors: {primary:"#6d85db"}}}
    icon="plus"
    mode="contained-tonal"
    title="Right button"
    {...props}      
      />)
    ;
};

export default button;