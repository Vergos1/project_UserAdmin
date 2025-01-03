import { ChildrenProps } from '@/core/types'
import { createTheme, MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'

const theme = createTheme({})

export const AppProvider = ({ children }: ChildrenProps) => {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </MantineProvider>
  )
}
