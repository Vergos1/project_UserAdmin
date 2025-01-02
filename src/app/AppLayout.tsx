import { Outlet } from 'react-router-dom'
// import Header from "./components/Header/Header.tsx";

const AppLayout = () => {
  return (
    <>
      {/*<Header/>*/}
      <Outlet />
    </>
  )
}
export default AppLayout
