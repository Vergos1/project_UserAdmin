import { NavLink, Switch } from '@mantine/core'
import "./CustomNavLink.scss"
import StoreLogo from './../../../assets/icons/navBar/StoreName.svg';
import home from './../../../assets/icons/navBar/home.svg';
import payments from './../../../assets/icons/navBar/payments.svg';
import balances from './../../../assets/icons/navBar/balances.svg';
import customers from './../../../assets/icons/navBar/customers.svg';
import connectedAccounts from './../../../assets/icons/navBar/connected-accounts.svg';
import products from './../../../assets/icons/navBar/products.svg';
import reports from './../../../assets/icons/navBar/reports.svg';
import settings from './../../../assets/icons/navBar/settings.svg';


function StoreNameDropdown() {
  const styleLogo = { width: '1vw', height: '1vw' };

  return (
    <>
      <NavLink
        className='navlink-store'
        label='Store name'
        leftSection={<img src={StoreLogo} alt='store' style={styleLogo} />}
        styles={{
          children: {
            marginTop: '2vh',
            marginLeft: '-7%',
            fontSize: 'clamp(12px, 1rem, 1.2rem)',
            color: '#1A1F36'
          }
        }}

      >
        <NavLink label='Home' className='navlink-home' leftSection={<img src={home} alt='Home' style={styleLogo} />} />
        <NavLink label='Payments' leftSection={<img src={payments} alt='Payments' style={styleLogo} />}/>
        <NavLink label='Balances' leftSection={<img src={balances} alt='Balances' style={styleLogo} />}/>
        <NavLink label='Customers' leftSection={<img src={customers} alt='Customers' style={styleLogo} />}/>
        <NavLink label='Connected Accounts' leftSection={<img src={connectedAccounts} alt='Connected' style={styleLogo} />}/>
        <NavLink label='Products' leftSection={<img src={products} alt='Products' style={styleLogo} />}/>
        <NavLink label='Reports' className='navlink-reports' leftSection={<img src={reports} alt='Reports' style={styleLogo} />}/>
        <NavLink label='Developers' leftSection={<img src={payments} alt='Developers' style={styleLogo} />}/>
        <Switch
          className='navlink-switch'
          defaultChecked
          label="View test data" />
        <NavLink label='Settings' leftSection={<img src={settings} alt='Settings' style={styleLogo} />}/>
      </NavLink>
    </>
  )
}

export default StoreNameDropdown
