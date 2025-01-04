import { AppShell, Burger, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { MantineLogo } from '@mantinex/mantine-logo'
import React from 'react'
import StoreNameDropdown from './component/StoreNameDropdown'

const HomePage: React.FC = () => {
  const [opened, { toggle }] = useDisclosure()
  return (
    <AppShell
      layout='alt'
      header={{ height: '10%' }}
      navbar={{ width: '20%', breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding='md'
    >
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          <MantineLogo size={30} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p='md'>
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
        </Group>
        <StoreNameDropdown/>
      </AppShell.Navbar>
      <AppShell.Main>Alt layout – Navbar and Aside are rendered on top on Header and Footer</AppShell.Main>
    </AppShell>
  )
}
export default HomePage
