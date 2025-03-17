import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import home from './../../../assets/icons/navBar/home.svg';
import payments from './../../../assets/icons/navBar/payments.svg';
import balances from './../../../assets/icons/navBar/balances.svg';
import customers from './../../../assets/icons/navBar/customers.svg';
import connectedAccounts from './../../../assets/icons/navBar/connected-accounts.svg';
import products from './../../../assets/icons/navBar/products.svg';
import reports from './../../../assets/icons/navBar/reports.svg';
import developers from './../../../assets/icons/navBar/payments.svg';
import settings from './../../../assets/icons/navBar/settings.svg';

import { Box, NavLink, Switch } from '@mantine/core';

const data = [
  { icon: home, label: 'Home', URL: '/home' },
  {
    icon: payments,
    label: 'Payments',
    URL: '/payments',
    children: [
      { label: 'Reviews', URL: '/payments/reviews' },
      { label: 'Disputes', URL: '/payments/disputes' },
      { label: 'Top-ups', URL: '/payments/top-ups' },
      { label: 'Collected fees', URL: '/payments/collected-fees' },
      { label: 'Transfers', URL: '/payments/transfers' },
      { label: 'Payouts', URL: '/payments/payouts' },
      { label: 'All transactions', URL: '/payments/all-transactions' },
    ],
  },
  { icon: balances, label: 'Balances', URL: '/balances' },
  { icon: customers, label: 'Customers', URL: '/customers' },
  { icon: connectedAccounts, label: 'Connected Accounts', URL: '/connectedAccounts' },
  { icon: products, label: 'Products', URL: '/products' },
  { icon: reports, label: 'Reports', URL: '/reports' },
  { icon: developers, label: 'Developers', URL: '/developers' },
  { icon: settings, label: 'Settings', URL: '/settings' },
];

function NavbarMenu() {
  const [active, setActive] = useState('/home');
  const navigate = useNavigate();

  const handleClick = (url) => {
    setActive(url);
    navigate(url);
  };

  const renderNavLink = (item) => {
    if (item.children) {
      return (
        <NavLink
          key={item.label}
          label={item.label}
          active={item.URL === active}
          onClick={() => handleClick(item.URL)}
          style={{ paddingLeft: '0.2rem' }}
          leftSection={
            <img
              src={item.icon}
              alt={item.label}
              style={{ width: '0.8rem', height: '0.8rem' }}
            />
          }
        >
          {item.children.map((child) => (
            <NavLink
              key={child.label}
              label={child.label}
              active={child.URL === active}
              href={child.URL}
              onClick={() => handleClick(child.URL)}
              style={{
                padding: '0.15rem 0 0.15rem 0.55rem',
                marginTop: child === item.children[0] ? '0.5rem' : '0',
                marginBottom: child === item.children[item.children.length - 1] ? '0.5rem' : '0',
              }}
            />
          ))}
        </NavLink>
      );
    }

    return (
      <NavLink
        key={item.label}
        active={item.URL === active}
        label={item.label}
        href={item.URL}
        leftSection={<img src={item.icon} alt={item.label} style={{ width: '0.8rem', height: '0.8rem' }} />}
        onClick={() => handleClick(item.URL)}
        variant="subtle"
        style={{ padding: '0.2rem' }}
      />
    );
  };

  const items = data.map((item) => renderNavLink(item));

  items.splice(
    items.length - 1,
    0,
    <Switch
      key="test-data-switch"
      defaultChecked
      label="View test data"
      style={{ marginLeft: '-0.3rem', padding: '0.3rem' }}
    />
  );

  return <Box style={{ width: '100%' }}>{items}</Box>;
}

export default NavbarMenu;
