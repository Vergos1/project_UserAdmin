import '@mantine/core/styles/global.css'
import '@mantine/core/styles/loader.css'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dates/styles.css'
import '../assets/styles/index.scss'
import '@mantine/charts/styles.css'
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
