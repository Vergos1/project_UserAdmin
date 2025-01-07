import React, { useState } from 'react'

import home from './../../../assets/icons/navBar/home.svg'
import payments from './../../../assets/icons/navBar/payments.svg'
import balances from './../../../assets/icons/navBar/balances.svg'
import customers from './../../../assets/icons/navBar/customers.svg'
import connectedAccounts from './../../../assets/icons/navBar/connected-accounts.svg'
import products from './../../../assets/icons/navBar/products.svg'
import reports from './../../../assets/icons/navBar/reports.svg'
import developers from './../../../assets/icons/navBar/payments.svg'
import settings from './../../../assets/icons/navBar/settings.svg'

import { Box, NavLink, Switch } from '@mantine/core'

const data = [
  { icon: home, label: 'Home', URL: '/home' },
  { icon: payments, label: 'Payments', URL: '/payments' },
  { icon: balances, label: 'Balances', URL: '/balances' },
  { icon: customers, label: 'Customers', URL: '/customers' },
  { icon: connectedAccounts, label: 'Connected Accounts', URL: '/connectedAccounts' },
  { icon: products, label: 'Products', URL: '/products' },
  { icon: reports, label: 'Reports', URL: '/reports' },
  { icon: developers, label: 'Developers', URL: '/developers' },
  { icon: settings, label: 'Settings', URL: '/settings' }
]

function NavbarMenu() {
  const [active, setActive] = useState(0)

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      href={item.URL}
      label={item.label}
      leftSection={<img src={item.icon} alt={item.label} style={{ width: '0.8rem', height: '0.8rem' }} />}
      onClick={() => setActive(index)}
      variant='subtle'
      style={{
        marginTop: [0, 1, 7].includes(index) ? '1rem' : '0',
        padding: '0.2rem'
      }}
    />
  ))

  items.splice(
    items.length - 1,
    0,
    <Switch
      key='test-data-switch'
      defaultChecked
      label='View test data'
      style={{ marginLeft: '-0.3rem', padding: '0.3rem' }}
    />
  )

  return <Box style={{ width: '100%' }}>{items}</Box>
}

export default NavbarMenu
