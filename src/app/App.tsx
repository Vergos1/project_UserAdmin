import '@mantine/core/styles/global.css'
import '@mantine/core/styles/loader.css'
import '@mantine/core/styles.css'
import '../assets/styles/index.scss'
// styles
import React from 'react'
import { AppProvider } from './AppProvider'
import AppRouter from './router/AppRouter'

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}
