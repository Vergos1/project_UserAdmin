import { Outlet } from 'react-router-dom';
import { AppShell, Burger, Group } from '@mantine/core';
import StoreNameBtn from './../components/app-navbar/store-name-btn/store-name-btn';
import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import AppNavbar from './../components/app-navbar/app-navbar';
import AppHeader from './../components/app-header/app-header';
import NavbarMenu from './../components/app-navbar/navbar-menu/navbar-menu';
import { useLocation } from 'react-router-dom';

const AppLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();
  const isSignInPage = location.pathname === '/sign-in';

  return (
    <>
      <AppShell
        layout="alt"
        header={isSignInPage ? undefined : { height: '7%' }}
        navbar={isSignInPage ? undefined : { width: '14%', breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="xs"
      >

        {!isSignInPage && (
          <>
            <AppShell.Header>
              <Group h="100%" px="md">
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                <AppHeader />
              </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
              <AppNavbar opened={opened} toggle={toggle} />
              <StoreNameBtn />
              <NavbarMenu />
            </AppShell.Navbar>
          </>
        )}
        <AppShell.Main style={{ paddingTop: '4rem' }}>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export default AppLayout;
