
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: '#1976d2'
        },
        secondary: {
          main: '#dc004e'
        }
      }
      : {
        // palette values for dark mode
        primary: {
          main: '#90caf9'
        },
        secondary: {
          main: '#f48fb1'
        }
      })
  }
})

export default getDesignTokens
