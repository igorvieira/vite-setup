import { ThemeProvider } from 'styled-components'

import ResetStyles from 'styles/resets'
import theme from 'styles/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <Story />
    </ThemeProvider>
  )
]
