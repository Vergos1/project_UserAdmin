import { ChildrenProps } from '@/core/types'
import { createTheme, MantineProvider } from '@mantine/core'

const theme = createTheme({})

export const AppProvider = ({ children }: ChildrenProps) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>
}
