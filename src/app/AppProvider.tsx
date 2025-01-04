import { ChildrenProps } from '@/core/types'
import { createTheme, MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import { Notifications } from '@mantine/notifications'

const theme = createTheme({})

export const AppProvider = ({ children }: ChildrenProps) => {
  return (
    <MantineProvider theme={theme}>
      <Notifications position='bottom-right' />
      <BrowserRouter>{children}</BrowserRouter>
    </MantineProvider>
  )
}
