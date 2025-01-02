import { Loader } from '@mantine/core'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from '../AppLayout'

const HomePage = lazy(() => import('../../pages/home-page/home-page'))
const SignInPage = lazy(() => import('../../pages/sign-in-page/sign-in-page'))

function App() {
  return (
    <Suspense fallback={<Loader color='gray' />}>
      <Routes>
        <Route path={AppRoutesEnum.Home} element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path={AppRoutesEnum.NotFound} element={<HomePage />} />
          <Route path={AppRoutesEnum.SignIn} element={<SignInPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
