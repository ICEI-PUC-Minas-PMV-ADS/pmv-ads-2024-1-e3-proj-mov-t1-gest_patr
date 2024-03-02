import * as React  from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = ({openMenu}) => {
    const actionRef = React.useRef();
  return (
    <Appbar.Header>
      <Appbar.Content title="Gestão de Patrimônio" />
      <Appbar.Action ref={actionRef} icon="dots-vertical" onPress={openMenu} />
    </Appbar.Header>
  );
};

export default AppBar;