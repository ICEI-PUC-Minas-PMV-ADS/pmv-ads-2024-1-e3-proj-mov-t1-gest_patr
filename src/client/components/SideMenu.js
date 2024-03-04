import * as React from 'react';
import { Drawer } from 'react-native-paper';

const SideMenu = () => {
  const [active, setActive] = React.useState('');

  return (
    <Drawer.Section title="Menu">
      <Drawer.Item
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
  );
};

export default SideMenu;