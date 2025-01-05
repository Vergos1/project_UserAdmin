import { Outlet } from 'react-router-dom'
import { AppShell, Burger, Group } from '@mantine/core'
import StoreNameDropdown from './../components/app-navbar/store-dropdown/store-dropdown'
import React from 'react'
import { useDisclosure } from '@mantine/hooks'
import AppNavbar from './../components/app-navbar/app-navbar'

const AppLayout = () => {
  const [opened, { toggle }] = useDisclosure()
  return (
    <>
      <AppShell
        layout='alt'
        header={{ height: '10%' }}
        navbar={{ width: '20%', breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding='md'
      >
        <AppShell.Header>
          <Group h='100%' px='md'>
            <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p='md'>
          <AppNavbar opened={opened} toggle={toggle}/>
          <StoreNameDropdown />
        </AppShell.Navbar>
      </AppShell>
      <Outlet />
    </>
  )
}
export default AppLayout
