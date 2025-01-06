import React, { useState } from 'react'

import home from './../../../assets/icons/navBar/home.svg';
import payments from './../../../assets/icons/navBar/payments.svg';
import balances from './../../../assets/icons/navBar/balances.svg';
import customers from './../../../assets/icons/navBar/customers.svg';
import connectedAccounts from './../../../assets/icons/navBar/connected-accounts.svg';
import products from './../../../assets/icons/navBar/products.svg';
import reports from './../../../assets/icons/navBar/reports.svg';
import developers from './../../../assets/icons/navBar/payments.svg';
import settings from './../../../assets/icons/navBar/settings.svg';

import { Box, NavLink, Switch } from '@mantine/core'

const data = [
  { icon: home, label: 'home' },
  { icon: payments, label: 'Payments' },
  { icon: balances, label: 'Balances' },
  { icon: customers, label: 'Customers' },
  { icon: connectedAccounts, label: 'Connected Accounts' },
  { icon: products, label: 'Products' },
  { icon: reports, label: 'Reports' },
  { icon: developers, label: 'Developers' },
  { icon: settings, label: 'Settings' },
];

function NavbarMenu() {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      leftSection={
        <img
          src={item.icon}
          alt={item.label}
          style={{ width: '0.8rem', height: '0.8rem' }}
        />
      }
      onClick={() => setActive(index)}
      variant="subtle"
      style={{
        marginTop: [0, 1, 7].includes(index) ? '1rem' : '0',
        padding: '0.2rem'
      }}
    />
  ));

  items.splice(
    items.length - 1,
    0,
    <Switch
      key="test-data-switch"
      defaultChecked
      label="View test data"
      style={{marginLeft: '-0.3rem', padding: '0.3rem'}}
    />
  );

  return <Box w={200}>{items}</Box>;
}

export default NavbarMenu;
