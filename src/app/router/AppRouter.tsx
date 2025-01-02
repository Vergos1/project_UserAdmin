import '@mantine/core/styles/global.css'
import '@mantine/core/styles/loader.css'
import './styles/style.scss'
// styles
import { Loader } from '@mantine/core'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from '../AppLayout'

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))

function App() {
  return (
    <Suspense fallback={<Loader color='gray' />}>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
