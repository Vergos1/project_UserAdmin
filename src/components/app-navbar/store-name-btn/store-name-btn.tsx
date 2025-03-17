import { NavLink } from '@mantine/core'
import s from './store-name.module.scss'
import StoreLogo from './../../../assets/icons/navBar/StoreName.svg'
import payments from './../../../assets/icons/navBar/sexshop.svg'

function StoreNameBtn() {
  const styleLogo = { width: '1rem', height: '1rem' }

  return (
    <>
      <NavLink
        style={{marginBottom: '1rem'}}
        className='navlink-store'
        label='Store name'
        leftSection={<img src={StoreLogo} alt='store' style={styleLogo} />}
      >
        <NavLink
          label='Sex Shop'
          className='navlink-home'
          leftSection={<img src={payments} alt='Home' style={styleLogo} />}
        />
        <NavLink label='Sex Shop' leftSection={<img src={payments} alt='Payments' style={styleLogo} />} />
        <NavLink label='Sex Shop' leftSection={<img src={payments} alt='Balances' style={styleLogo} />} />
        <NavLink label='Sex Shop' leftSection={<img src={payments} alt='Customers' style={styleLogo} />} />
      </NavLink>
    </>
  )
}

export default StoreNameBtn
