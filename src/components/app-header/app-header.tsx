import React, { useState } from 'react';
import { Autocomplete, Button, Loader } from '@mantine/core'
import search from './../../assets/icons/navBar/search.svg'
import notifications from './../../assets/icons/header/notifications.svg'
import help from './../../assets/icons/header/help.svg'
import account from './../../assets/icons/header/account.svg'

const AppHeader = () => {
  const styleLogo = {width: '1.3rem', height: '1.3rem'}

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    setLoading(true);
    setTimeout(() => {
      setData(
        ['React', 'Vue', 'Angular', 'Svelte'].filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        )
      );
      setLoading(false);
    }, 500);
  };

  return (
    <Autocomplete
      leftSection={<img src={search} alt='search' style={styleLogo} />}
      placeholder="Search..."
      data={data}
      onChange={handleSearch}
      rightSection={
        loading ? (
          <Loader size="xs" />
        ) : (
          <div style={{ display: 'flex', marginRight: '4rem' }}>
            <Button variant="subtle" size="xs" style={{ padding: 6}}>
              <img
                src={notifications}
                alt="notifications"
                style={{ width: '1rem', height: '1rem' }}
              />
            </Button>
            <Button variant="subtle" size="xs" style={{ padding: 6}}>
              <img src={help} alt="help" style={{ width: '1rem', height: '1rem' }} />
            </Button>
            <Button variant="subtle" size="xs" style={{ padding: 6 }}>
              <img src={account} alt="account" style={{ width: '1rem', height: '1rem' }} />
            </Button>
          </div>
        )
      }
      styles={(theme) => ({
        root: {
          flexGrow: 1,
        },
        input: {
          width: '100%',
          border: 'none',
          backgroundColor: 'transparent',
          padding: theme.spacing.xs,
          paddingLeft: '2.5rem',
          '&:focus': {
            border: 'none',
            boxShadow: 'none',
          },
        },
      })}
    />
  );
};

export default AppHeader;
