import { Burger, Group } from '@mantine/core';
import React from 'react';

interface NavbarProps {
  opened: boolean;
  toggle: () => void;
}

const AppNavbar: React.FC<NavbarProps> = ({ opened, toggle }) => {
  return (
    <Group>
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
    </Group>
  );
};

export default AppNavbar;
